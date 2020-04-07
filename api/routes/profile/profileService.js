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

const updateProfile = async (req, res) => {
  const { _firstName, _lastName, _displayName } = req.body;
  const { profileId } = req.params;
  // console.log("i'm updating profile!", req.body);

  const profile = await Profile.findByPk(profileId);
  console.log(profile, "i'm the profile");
  profile.first_name = _firstName;
  profile.last_name = _lastName;
  profile.display_name = _displayName;

  profile.save();

  return res.status(200).send({ data: profile });

  // //  const brandObjArr = Object.entries(brandObj);
  // //  const brand = await Brand.findById(id);
  //  for (let i = 0; i < brandObjArr.length; i += 1) {
  //    let key = brandObjArr[i][0];
  //    let value = brandObjArr[i][1];
  //    if (brand[key] !== value) {
  //      brand[key] = value;
  //    }
  //  }
};
module.exports = {
  createProfile,
  getProfile,
  updateProfile,
};
