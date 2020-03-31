"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Profile belongsTo NotificationPreference
    return queryInterface
      .addColumn("Profile", "notification_preference", {
        type: Sequelize.UUID,
        references: {
          model: "NotificationPreference",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      })
      .then(() => {
        // Profile belongsTo User
        return queryInterface.addColumn("Profile", "user", {
          type: Sequelize.UUID,
          references: {
            model: "User",
            key: "id"
          }
        });
      })
      .then(() => {
        // User belongsTo Organization
        return queryInterface.addColumn("User", "organization", {
          type: Sequelize.UUID,
          references: {
            model: "Organization",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn("Profile", "notification_preference")
      .then(() => {
        return queryInterface.removeColumn("Profile", "user");
      })
      .then(() => {
        return queryInterface.removeColumn("User", "organization");
      });
  }
};
