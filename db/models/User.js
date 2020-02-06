const mongoose = require("../connection");

const UserSchema = new mongoose.Schema({
	title: String,
	body: String,
	answers: [String],
	user: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
