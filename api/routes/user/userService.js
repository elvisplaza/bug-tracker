// Models
const Organization = require("./../../models").Organization;
const User = require("./../../models/").User;
const UserApp = require("./../../models/").UserApp;
const Profile = require("./../../models/").Profile;
const NotificationPreference = require("./../../models/").NotificationPreference;
const App = require("./../../models/").App;
// utils
const tokenService = require("./../../utils/tokenService");

const { Op } = require("sequelize");

const createUser = async (req, res) => {
  const { _phoneNumber, _email, _isAdmin, _organizationName, _password } = req.body;

  try {
    await Organization.create(
      {
        name: _organizationName,
        user_company: {
          email: _email,
          phone_number: _phoneNumber,
          is_admin: _isAdmin,
          password: _password,
          is_phone_valid: false,
          is_email_valid: false,
          created_at: new Date(),
          updated_at: new Date(),
          user_profile: {
            email: _email,
            age: new Date(),
            is_admin: _isAdmin,
            first_name: "",
            last_name: "",
            display_name: `${_organizationName}NewUser`,
            notification_preference: {
              marketing: true,
              project: true,
              created_at: new Date(),
              updated_at: new Date(),
            },
            created_at: new Date(),
            updated_at: new Date(),
          },
        },
      },
      {
        include: [
          {
            model: User,
            as: "user_company",
            include: [
              {
                model: Profile,
                as: "user_profile",
                include: [
                  {
                    model: NotificationPreference,
                    as: "notification_preference",
                  },
                ],
              },
            ],
          },
        ],
      }
    );
    return res.status(204).end();
  } catch (err) {
    throw err;
  }
};

const getUser = async (req, res) => {
  const { email, password } = req.query;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
      include: {
        model: Organization,
        as: "user_company",
      },
    });
    const token = await tokenService.issueToken(user);

    return res.status(200).send({ data: [token, user] });
  } catch (err) {
    throw err;
  }
};

// ================== /user/:userId ==================

const getOneUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({
    where: {
      id: userId,
    },
    include: [
      {
        model: Organization,
        as: "user_company",
      },
      {
        model: Profile,
        as: "user_profile",
      },
      {
        model: App,
        as: "company_apps",
      },
    ],
  });

  return res.status(200).send({ data: user });
};

const getUserApps = async (req, res) => {
  const { userId } = req.params;
  const { name } = req.query;
  const apps = await User.findAll({
    where: {
      id: userId,
    },
    include: [
      {
        model: App,
        as: "company_apps",
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      },
    ],
  });
  return res.status(200).send({ data: apps[0].company_apps });
};
module.exports = {
  createUser,
  getUser,
  getOneUser,
  getUserApps,
};
