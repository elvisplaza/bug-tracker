const App = require("./../../models").App;

const createApp = async (req, res) => {
  const {
    _name,
    _clientLanguage,
    _serverLanguage,
    _databaseType,
    _lastUpdated,
    _description,
    _websiteUrl,
    _organizationId
  } = req.body;
  console.log("im connected to req.params", req.body);

  try {
    await App.create({
      name: _name,
      client_language: _clientLanguage,
      server_language: _serverLanguage,
      database_type: _databaseType,
      last_updated: _lastUpdated,
      description: _description,
      website_url: _websiteUrl,
      organization: _organizationId
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createApp
};
