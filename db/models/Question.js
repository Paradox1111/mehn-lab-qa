const mongoose = require("../connection");

const QuestionSchema = new mongoose.Schema({
	title: String,
	body: String,
	answers: [String],
	user: String
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
