const App = require("./../../models").App;
const Bug = require("./../../models").Bug;
const Organization = require("./../../models").Organization;

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
    });

    return res.status(200).send({ data: newApp });
  } catch (err) {
    throw err;
  }
};

const getAppById = async (req, res) => {
  const { appId } = req.params;

  try {
    const app = await App.findByPk(appId);
    res.status(200).send({ data: app });
  } catch (err) {
    throw err;
  }
};
module.exports = {
  createApp,
  getAppById,
};
