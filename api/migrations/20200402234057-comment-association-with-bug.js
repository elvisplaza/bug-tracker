"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Bug.hasMany(Comment);
    return queryInterface.addColumn("Bug", "comments", {
      type: Sequelize.UUID,
      references: {
        model: "Comment",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Bug", "comments");
  }
};
