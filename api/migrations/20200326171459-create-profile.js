"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Profile",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
        age: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: 0
        },
        is_admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
        display_name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE
        }
      },
      {
        underscored: true,
        freezeTableName: true
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Profile");
  }
};
