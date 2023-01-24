require("express-async-errors");
const express = require('express');
const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");
const routes = require("./routes");
const app = express();

migrationsRun();

app.use(express.json());
app.use(routes);

app.use( (error, request, response, next) => { // Os argumentos precisam ser passados nessa ordem, embora nem todos sejam utilizados no escopo
    // Tratando erro do cliente
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error); // Para tratar o erro na hora de debugar

    // Tratando erro do servidor
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));