const Profile = require("./../../models").Profile;

const createNotificationPreference = async (req, res) => {
  const { _marketing, _project } = req.body;

  try {
    const newNP = await Profile.create({
      marketing: _marketing,
      project: _project,
    });
    return res.status(204).send({ data: newNP });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createNotificationPreference,
};
