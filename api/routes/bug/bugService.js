const Bug = require("./../../models").Bug;

const createBug = async (req, res) => {
  const { _title, _riskLevel, _isFixed, _path, _expectedResult, _actualOutcome, _stepsToFix } = req.body;

  // try {
  //   const newProfile = await Profile.create({
  //     age: `${_year}-${_month}-${_day}`,
  //     first_name: _first_name,
  //     last_name: _last_name,
  //     display_name: _display_name,
  //     is_admin: _is_admin,
  //     email: _email,
  //   });
  //   return res.status(204).send({ data: newProfile });
  // } catch (err) {
  //   throw err;
  // }
};

module.exports = {
  createBug,
};
