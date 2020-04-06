"use strict";

module.exports = {
  // User.hasOne(Profile)
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("User", "profile", {
      type: Sequelize.UUID,
      references: {
        model: "Profile",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("User", "profile");
  },
};
