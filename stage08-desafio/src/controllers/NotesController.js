const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");
const knex = require("../database/knex");

class NotesController {
    async index(request, response) {
        const { user_id, title, tag } = request.query;

        let notes;

        if(tag) {
            notes = await knex("tags")
                .select(["notes.id", "notes.title", "notes.user_id"])
                .where("notes.user_id", user_id)
                .whereLike("notes.title", `%${title}%`)
                .where({ name: tag })
                .innerJoin("notes", "notes.id", "tags.note_id")
                .orderBy("notes.title");
        } else {
            notes = await knex("notes")
                .where({ user_id }).orderBy("title")
                .whereLike("title", `%${title}%`);
        }

        const userTag = await knex("tags").where({ user_id });
        const notesWithTag = notes.map(note => {
            const noteTag = userTag.filter(tag => tag.note_id === note.id);
            return {
                ... note,
                tag: noteTag
            }
        });

        return response.json(notesWithTag);
    }

    async create(request, response) {
        const { title, description, rating, name } = request.body;
        const { user_id } = request.params;

        const note_id = await knex("notes").insert({
            title,
            description,
            rating,
            user_id
        });

        const tagInsert = note_id.map(id => {
            return {
                note_id: id,
                name,
                user_id
            }
        })

        await knex("tags").insert(tagInsert)

        response.json();
    }

    async show(request, response) {
        const { id } = request.params;

        const note = await knex("notes").where({ id }).first();

        const tag = await knex("tags").where({ note_id:id });

        response.json({
            note,
            tag
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("notes").where({ id }).delete();

        return response.json();
    }
}

module.exports = NotesController;