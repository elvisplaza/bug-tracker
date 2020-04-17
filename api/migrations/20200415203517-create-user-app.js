"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable(
        "UserApp",
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
          },
          user_id: {
            type: Sequelize.UUID,
            references: {
              model: "User",
              key: "id",
            },
            primaryKey: false,
            unique: "unique-genre-per-post",
          },
          app_id: {
            type: Sequelize.UUID,
            references: {
              model: "App",
              key: "id",
            },
            primaryKey: false,
            unique: "unique-genre-per-post",
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        },
        {
          freezeTableName: true,
          underscored: true,
        }
      )
      .then(() => {
        return queryInterface.addColumn("App", "user_app_id", {
          type: Sequelize.UUID,
          references: {
            model: "UserApp",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      })
      .then(() => {
        return queryInterface.addColumn("User", "user_app_id", {
          type: Sequelize.UUID,
          references: {
            model: "UserApp",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("UserApp").then(() => {
      return queryInterface.removeColumn("App", "user_app_id").then(() => {
        return queryInterface.removeColumn("User", "user_app_id");
      });
    });
  },
};
