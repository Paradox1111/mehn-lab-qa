const mongoose = require("../connection");

const AnswerSchema = new mongoose.Schema({
    body: { type: String, required: true }
});

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;