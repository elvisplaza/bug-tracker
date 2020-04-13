const Organization = require("./../../models").Organization;
const User = require("./../../models/").User;
const Profile = require("./../../models/").Profile;
const NotificationPreference = require("./../../models/").NotificationPreference;
// utils
const tokenService = require("./../../utils/tokenService");

const createUser = async (req, res) => {
  const { _phoneNumber, _email, _isAdmin, _organizationName, _password } = req.body;

  try {
    const newUser = await Organization.create(
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

    console.log("newUser", newUser);
    // await Organization.create({
    //   name: _organizationName,
    // }).then((org) => {
    //   console.log("&&&&& org", org);
    //   org
    //     .createUserCompany({
    //       email: _email,
    //       phone_number: _phoneNumber,
    //       is_admin: _isAdmin,
    //       password: _password,
    //       is_phone_valid: false,
    //       is_email_valid: false,
    //     })
    //     .then((user) => {
    //       user
    //         .createProfile({
    //           email: user.email,
    //           age: new Date(),
    //           is_admin: user._isAdmin,
    //           first_name: "",
    //           last_name: "",
    //           display_name: `${_organizationName}NewUser`,
    //         })
    //         .then((profile) => {
    //           profile.createNotificationPreference({
    //             marketing: true,
    //             project: true,
    //           });

    //           return res.status(201).send({ data: profile });
    //         });
    //     });
    // });
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
      include: Organization,
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
        as: "Organization",
      },
      {
        model: Profile,
        as: "Profile",
      },
    ],
  });

  return res.status(200).send({ data: user });
};

module.exports = {
  createUser,
  getUser,
  getOneUser,
};
