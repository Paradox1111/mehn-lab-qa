const express = require('express');
const Question = require('../db/models/Question');
const Answer = require('../db/models/Answer');

const router = express.Router();

router.get('/edit/:answerid/:questionid', (req, res) => {
   console.log(req.params.answerid);
   Answer.findById(req.params.answerid).then(answer => {
      Question.findById(req.params.questionid).then(question => {
         console.log(question);
         res.render('edit', { answer, question });
      });
   });
});

router.put('/edit/:answerid/:questionid', (req, res) => {
   Answer.findByIdAndUpdate(
      req.params.answerid,
      { body: req.body.answer },
      { new: true }
   ).then(answer => {
      Question.findById(req.params.questionid).then(question => {
         let index = question.answers.indexOf({_id: req.params.answerid, body: answer.body})
      })
   }).then(() => res.redirect('/questions'));
});

router.get('/:id', (req, res) => {
   Question.findById(req.params.id)
      .then(question => {
         console.log(question);
         res.render('show', { question });
      })
      .catch(console.error);
});

router.get('/', (req, res) => {
   Question.find({})
      .then(questions => {
         res.render('index', { questions });
      })
      .catch(console.error);
});

router.delete('/delete/:id/', (req, res) => {
   console.log(req.params);
   Question.findByIdAndDelete(req.params.id)
      .then(deletedThing => {
         console.log(deletedThing);
      })
      .then(res.redirect('/questions'));
});

// router.put('/edit/:id', (req, res) => {
// 	Question.findOneAndUpdate({_id: req.params.id}, {

// 	}, {new: true}).then(res.redirect('/questions/' + req.params.id)
// 	)
// })

router.post('/:id', (req, res) => {
   Question.findById(req.params.id).then(question => {
      Answer.create({ body: req.body.answer })
         .then(answer => {
            question.answers.push({ body: answer.body });
            question.save();
            res.render('show', { question });
         })
         .catch(console.error);
   });
});

router.post('/', (req, res) => {
   let question = {
      title: req.body.title,
      body: req.body.question,
      answers: []
   };
   if (question.title && question.body) {
      Question.create(question).then(question => {
         res.redirect('/questions');
      });
   }
});

module.exports = router;
