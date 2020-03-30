"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("NotificationPreference", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      marketing: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      project: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      profile: {
        type: Sequelize.UUID,
        references: {
          model: "Profile",
          key: "id"
        }
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("NotificationPreference");
  }
};
