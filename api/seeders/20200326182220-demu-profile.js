"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Profile", [
      {
        id: "db62ed94-6f8e-11ea-bc55-0242ac130003",
        email: "elvis.plaza@hotmail.com",
        age: new Date(),
        is_admin: true,
        first_name: "Elvis",
        last_name: "Plaza",
        display_name: "epapi",
        user_id: "6bb962f2-6f8e-11ea-bc55-0242ac130003",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
