const App = require("./../../models").App;
const Bug = require("./../../models").Bug;
const User = require("./../../models").User;
const Organization = require("./../../models").Organization;
const UserApp = require("./../../models").UserApp;

const createApp = async (req, res) => {
  const {
    _name,
    _clientLanguage,
    _serverLanguage,
    _databaseType,
    _lastUpdated,
    _description,
    _websiteUrl,
    _organizationId,
  } = req.body;

  try {
    const newApp = await App.create({
      name: _name,
      client_language: _clientLanguage,
      server_language: _serverLanguage,
      database_type: _databaseType,
      last_updated: _lastUpdated,
      description: _description,
      website_url: _websiteUrl,
      organization_id: _organizationId,
      // user_id: "338bdcf1-7e7c-11ea-90ac-f11f3c2c64e1",
    }).then(async (app) => {
      await UserApp.create({
        user_id: "338bdcf1-7e7c-11ea-90ac-f11f3c2c64e1",
        app_id: app.id,
      });
      // .then(async (userApp) => {
      //   console.log(userApp.id, "userApp id ***");
      //   const user = await User.findByPk(userApp.user_id);
      //   const app = await App.findByPk(userApp.app_id);
      //   user.user_app_id = userApp.id;
      //   app.user_app_id = userApp.id;
      //   user.save();
      //   app.save();
      // });
    });

    return res.status(200).send({ data: newApp });
  } catch (err) {
    throw err;
  }
};

const getAppById = async (req, res) => {
  const { appId } = req.params;
  console.log("i am being rann *** ", appId);

  try {
    const app = await App.findByPk(appId, {
      include: [
        {
          model: Bug,
          as: "app_bugs",
        },
        {
          model: User,
          as: "app_users",
        },
      ],
    });
    return res.status(200).send({ data: app });
  } catch (err) {
    throw err;
  }
};

const getAllAppsByOrg = async (req, res) => {
  const { orgId } = req.params;
  console.log(orgId, "%%% yesss i'm connected!");
  const apps = await App.findAll({ where: { organization_id: orgId } });

  return res.status(200).send({ data: apps });
};
module.exports = {
  createApp,
  getAppById,
  getAllAppsByOrg,
};
