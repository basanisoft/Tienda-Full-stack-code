'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('material', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            }
        }).then(function() {
            return queryInterface.addColumn('quote', 'author_id', {
                type: Sequelize.INTEGER,
                after: 'id'
            });
        }).then(function() {
            return queryInterface.addConstraint('quote', [ 'author_id' ], {
                type: 'FOREIGN KEY',
                name: 'material',
                references: {
                    table: 'material',
                    field: 'id'
                },
                onDelete: 'cascade'
            });
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeConstraint('quote', 'material').then(function() {
            return queryInterface.removeColumn('quote', 'author_id');
        }).then(function() {
            return queryInterface.dropTable('material');
        });
    }
};
