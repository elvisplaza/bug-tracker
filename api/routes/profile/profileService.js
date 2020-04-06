const Profile = require("./../../models").Profile;

const createProfile = async (req, res) => {
  const { _month, _year, _day, _first_name, _last_name, _display_name, _is_admin, _email } = req.body;

  try {
    const newProfile = await Profile.create({
      age: `${_year}-${_month}-${_day}`,
      first_name: _first_name,
      last_name: _last_name,
      display_name: _display_name,
      is_admin: _is_admin,
      email: _email,
    });
    return res.status(204).send({ data: newProfile });
  } catch (err) {
    throw err;
  }
};

const getProfile = async (req, res) => {
  const { profileId } = req.params;

  const profile = await Profile.findByPK(profileId);

  return res.status(200).send({ data: profile });
};

module.exports = {
  createProfile,
  getProfile,
};
