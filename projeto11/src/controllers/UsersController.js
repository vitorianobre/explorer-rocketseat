const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require('../database/sqlite');
const { use } = require("express/lib/router");

class UsersController {
    /*
        index - GET para listar vários registros.
        show - GET para exibir um registro específico.
        create - POST para criar um registro.
        update - PUT para atualizar um registro.
        delete - DELETE para remover um registro.
    */

    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (checkUserExists) {
            throw new AppError("Este e-mail já está em uso");
        }

        const hashedPassword = await hash(password, 8);

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        // Conecta com o banco de dados
        const database = await sqliteConnection();

        // Seleciona de dentro do banco de dados o usuário que será modificado
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        // Verifica se o usuário procurado existe através do retorno da seleção
        if (!user) {
            throw new AppError("Usuário não encontrado");
        }

        // Busca no banco de dados se há um usuário existente com aquele email
        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        // Verifica se o e-mail já existe e se o usuário que o utiliza é o mesmo que está realizando a modificação
        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso.");
        }

        // Se as modificações não forem barradas nas condicionais quer dizer que a mudança pode ser realizada
        user.name = name ?? user.name;
        user.email = email ?? user.email;

        // Verificar se o usuário informou a senha atual
        if (password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para definir a nova senha");
        }

        // Verifica se password e old_password foram informadas na requisição
        if (password && old_password) {
            // Realiza a comparação da senha antiga informada e a que está gravada no banco de dados
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) { // Se as senhas forem diferentes
                throw new AppError("A senha antiga não confere");
            }

            // Se a modificação não for barrada a senha pode ser alterada
            user.password = await hash(password, 8); // Criptografando a nova senha
        }

        // Enviar os dados para o banco
        await database.run(`UPDATE users SET name = ?, email = ?, password = ?, updated_at = DATETIME('now') WHERE id = ?`, 
        [user.name, user.email, user.password, id]);

        return response.json()
    }
}

module.exports = UsersController