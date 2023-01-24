const { Router } = require("express");
const NotesController = require("../controllers/NotesController");

const userNotes = Router();

const notesController = new NotesController();

userNotes.get("/", notesController.index);
userNotes.post("/:user_id", notesController.create);
userNotes.get("/:id", notesController.show);
userNotes.delete("/:id", notesController.delete)

module.exports = userNotes;