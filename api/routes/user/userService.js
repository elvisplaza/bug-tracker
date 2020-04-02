const Organization = require("./../../models").Organization;
const User = require("./../../models/").User;

// utils
const tokenService = require("./../../utils/tokenService");

const createUser = async (req, res) => {
  const { _phoneNumber, _email, _isAdmin, _organizationName, _password } = req.body;

  try {
    const newUser = await Organization.create({
      name: _organizationName
    }).then(org => {
      org
        .createUser({
          email: _email,
          phone_number: _phoneNumber,
          is_admin: _isAdmin,
          password: _password,
          is_phone_valid: false,
          is_email_valid: false
        })
        .then(user => {
          return res.status(201).send({ data: user });
        });
    });
    // console.log("new user %%%", newUser);
  } catch (err) {
    throw err;
  }
};

const getUser = async (req, res) => {
  const { email, password } = req.query;
  try {
    const user = await User.findOne({
      where: {
        email
      },
      include: Organization
    });
    const token = await tokenService.issueToken(user);

    return res.status(200).send({ data: [token, user] });
  } catch (err) {
    throw err;
  }
};

const getOneUser = async (req, res) => {
  const { userId } = req.params;
  const user = User.findByPk(userId);
  console.log(userId, "user id");
  return res.status(200).send({ data: user });
};

module.exports = {
  createUser,
  getUser,
  getOneUser
};
