const Bug = require("./../../models").Bug;

const createBug = async (req, res) => {
  const { _title, _riskLevel, _isFixed, _path, _expectedResult, _actualOutcome, _stepsToFix, appId } = req.body;

  try {
    const newBug = await Bug.create({
      title: _title,
      risk_level: _riskLevel,
      is_fixed: _isFixed,
      path: _path,
      expected_result: _expectedResult,
      actual_outcome: _actualOutcome,
      steps_to_fix: _stepsToFix,
      app_id: appId,
    });

    return res.status(204).send({ data: newBug });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createBug,
};
