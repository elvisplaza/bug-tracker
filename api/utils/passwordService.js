const bcrypt = require("bcryptjs");

exports.comparePassword = async (incomingPassword, userPassword) => {
  const match = await bcrypt.compare(incomingPassword, userPassword);
  console.log(match, "match in password ***");
  if (match) {
    return true;
  }
  return false;
};

exports.hashPassword = (incomingPassword, hashAmount) => {
  return bcrypt.hash(incomingPassword, hashAmount);
};
