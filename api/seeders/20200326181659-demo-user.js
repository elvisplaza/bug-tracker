"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("User", [
      {
        id: "6bb962f2-6f8e-11ea-bc55-0242ac130003",
        is_email_valid: false,
        is_phone_valid: false,
        is_admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
