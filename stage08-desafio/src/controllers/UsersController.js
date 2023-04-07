const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");
const knex = require("../database/knex");

class UsersControllers {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();

        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
        if (checkUserExists) {
            throw new AppError("Este e-mail já está em uso.");
        }

        const hashedPassword = await hash (password, 8);

        await knex("users").insert({
            name,
            email,
            password: hashedPassword
        });

        response.json()
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        const user = await knex("users").where({id}).first();

        if(!user) {
            throw new AppError("Usuário não encontrado");
        }
        if(name) {
            user.name = name;
        }

        const userWithUpdatedEmail = await knex("users").where({email}).first();
        if(userWithUpdatedEmail && userWithUpdatedEmail.id == user.id) {
            throw new AppError("Este e-mail já está em uso");
        }
        if(email) {
            user.email = email
        }
        
        if(password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere");
            }
            user.password = await hash(password, 8);
        }

        await knex("users").where({id}).first().update({name: user.name, email: user.email, password: user.password, updated_at: knex.fn.now()});

        response.json();
    }
}

module.exports = UsersControllers;