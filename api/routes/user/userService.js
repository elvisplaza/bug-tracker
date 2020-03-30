const models = require("./../../models");

const createUser = async (req, res) => {
  const { phoneNumber, email, isAdmin, organizationName, password } = req.body;
};

module.exports = {
  createUser
};
