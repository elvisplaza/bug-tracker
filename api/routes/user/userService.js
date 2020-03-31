const Organization = require("./../../models").Organization;
const User = require("./../../models/").User;

const createUser = async (req, res) => {
  const { _phoneNumber, _email, _isAdmin, _organizationName, _password } = req.body;
  try {
    const newUser = await Organization.create({
      name: _organizationName
    }).then(org => {
      org.createUser({
        email: _email,
        phone_number: _phoneNumber,
        is_admin: _isAdmin,
        password: _password,
        is_phone_valid: false,
        is_email_valid: false
      });
      return res.status(201).json({ data: newUser });
    });
  } catch (err) {
    throw err;
  }
};

const getUser = async (req, res) => {
  const { email, password } = req.query;
  console.log(req.query, "query for user");
  // try {
  //   const user = await User.findByPk(userId);

  //   return res.status(200).send({ data: user });
  // } catch (err) {
  //   throw err;
  // }
};

module.exports = {
  createUser,
  getUser
};
