const App = require("./../../models").App;

const createUser = async (req, res) => {
  const {
    _name,
    _clientLanguage,
    _serverLanguage,
    _databaseType,
    _lastUpdated,
    _description,
    _websiteUrl
  } = req.params;

  console.log("im connected to req.params", req.params);
};

module.exports = {
  createUser
};
