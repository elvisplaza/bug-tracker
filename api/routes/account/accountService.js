const User = require("./../../models/").User;
const Organization = require("./../../models/").Organization;
const { comparePassword } = require("./../../utils/passwordService");
// utils
const tokenService = require("./../../utils/tokenService");

const getAccount = async (req, res) => {
  const { email, password } = req.body;
  console.log("email and password", req.body);
  try {
    const user = await User.findOne({
      where: {
        email,
      },
      include: {
        model: Organization,
        as: "user_company",
      },
    });
    if (!user) {
      return res.status(400).json({ error: "no account exist with this email" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      console.log("i'm running");
      return res.status(400).json({ error: "the email and password combination is incorrect" });
    }

    const token = await tokenService.issueToken(user);

    return res.status(200).send({ data: [token, user] });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAccount,
};
