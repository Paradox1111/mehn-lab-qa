const mongoose = require("../connection");

const QuestionSchema = new mongoose.Schema({
	title: { type: String, required: true },
	body: String,
	answers: [String],
	user: String
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
