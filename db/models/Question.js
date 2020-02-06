const mongoose = require("../connection");

const AnswerSchema = new mongoose.Schema({
	body: { type: String, required: true }
});

const QuestionSchema = new mongoose.Schema({
	title: { type: String, required: true },
	body: String,
	answers: [AnswerSchema],
	user: String
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;

