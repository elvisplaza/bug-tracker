"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // App.hasMany(bug);
    return queryInterface.addColumn("App", "bug_id", {
      type: Sequelize.UUID,
      references: {
        model: "Bug",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("App", "bug_id");
  },
};
