const jwt = require("jsonwebtoken");
const encrypt = require("../../utils/sha512");
const userCollection = require("../../models/user");
const wrapResponse = require("../../utils/wrapResponse");
const handleError = require("../../utils/handleError");

module.exports = {
  login: async (params) => {
    const { username, password } = params;
    const passhash = encrypt(password);
    try {
      const user = await userCollection.get(username, passhash);
      const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });
      const { preferences, gestures } = user;

      return wrapResponse(200, {
        username,
        preferences, 
        gestures,
        token,
      });
    } catch (error) {
      return handleError(error);
    }
  },
  register: async (params) => {
    console.log(params, 'body');
    const passhash = encrypt(params.password);
    params.password = passhash;
    try {
      const response = await userCollection.create(params);
      return wrapResponse(200, response);
    } catch (error) {
      return handleError(error);
    }
  },
};
