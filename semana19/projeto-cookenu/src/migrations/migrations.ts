import connection from "../connection";
import { userTableName, recipeTableName } from "../types";

connection.raw(`
        CREATE TABLE ${userTableName} (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );

        CREATE TABLE ${recipeTableName} (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(15077) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            author_id VARCHAR(255),
            FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
        );

    `).then(() => console.log(
        "Tabelas MySQL criadas com sucesso"
        )).catch(error => 
            console.log(error.message)
        ).finally(() => {
            connection.destroy()
        })



