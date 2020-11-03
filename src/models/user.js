const mongoose = require("./connection");

const schema = new mongoose.Schema({
  username: String,
  password: String,
  preferences: { type: [{ id: mongoose.ObjectId, label: String }], default: [] },
  gestures: { type: [{ id: mongoose.ObjectId, label: String }], default: [] },
});

const user = mongoose.model("users", schema);

module.exports = {
  getAll: () => user.find(),
  create: (data) => {
    const created = new user(data);
    return created.save();
  },
  getByUsername: (username) => user.findOne({ username }),
  get: (username, password) => user.findOne({ username, password }),
};
