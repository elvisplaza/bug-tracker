const Sequelize = require("sequelize");

const createUser = async (req, res) => {
  const { name, email, password, organization } = req.body;
};

exports.module = {
  createUser
};
