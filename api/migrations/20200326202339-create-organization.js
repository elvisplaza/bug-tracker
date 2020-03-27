"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Organization", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: "Organization Name"
      },
      // admin: {
      //   type: Sequelize.JSON,
      //   allowNull: false,
      //   defaultValue: {}
      // },
      // apps: {
      //   type: Sequelize.ARRAY(Sequelize.TEXT),
      //   allowNull: false,
      //   defaultValue: []
      // },
      // user_id: {
      //   type: Sequelize.UUID,
      //   references: {
      //     model: "User",
      //     key: "id"
      //   }
      // },
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Organization");
  }
};
