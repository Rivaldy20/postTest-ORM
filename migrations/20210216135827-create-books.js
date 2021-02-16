'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('books', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            isbn: {
                type: Sequelize.STRING
            },
            judul: {
                type: Sequelize.STRING
            },
            sinopsis: {
                type: Sequelize.TEXT
            },
            penulis: {
                type: Sequelize.STRING
            },
            genre: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('books');
    }
};