const express = require("express");
const Question = require("../db/models/Question");

const router = express.Router();

router.get("/:id", (req, res) => {
	Question.findById(req.params.id)
		.then(question => {
			res.render("show", { question });
		})
		.catch(console.error);
});

router.get("/", (req, res) => {
	Question.find({})
		.then(questions => {
			res.render("index", { questions });
		})
		.catch(console.error);
});

router.delete("/delete/:id/", (req, res) => {
	console.log(req.params);
	Question.findByIdAndDelete(req.params.id)
		.then(deletedThing => {
			console.log(deletedThing);
		})
		.then(res.redirect("/questions"));
});

router.post("/:id", (req, res) => {
	Question.findById(req.params.id)
		.then(question => {
			question.answers.push(req.body.answer);
			question.save();
			res.render("show", { question });
		})
		.catch(console.error);
});

router.post("/", (req, res) => {
	let question = {
		title: req.body.title,
		body: req.body.question,
		answers: []
	};
	if (question.title && question.body) {
		Question.create(question).then(question => {
			res.redirect("/questions");
		});
	}
});

module.exports = router;
