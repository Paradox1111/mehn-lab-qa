const Question = require("./db/models/Question");
const data = require("./seedData.json");

Question.remove({})
	.then(() => {
		return Question.collection.insert(data);
	})
	.then(() => {
		process.exit();
	});
