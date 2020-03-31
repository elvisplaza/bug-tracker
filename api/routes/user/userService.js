const Organization = require("./../../models").Organization;
const User = require("./../../models/").User;

const createUser = async (req, res) => {
  const { _phoneNumber, _email, _isAdmin, _organizationName, _password } = req.body;
  console.log("req body %%%%", req.body);
  await Organization.create({
    name: _organizationName
  });
};

module.exports = {
  createUser
};
