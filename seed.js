const Question = require('./db/models/Question');
const Answer = require('./db/models/Answer');
const data = require('./seedData.json');

Question.deleteMany({}).then(() => {
   console.log('deleted all Questions');
   Answer.deleteMany({}).then(() => {
      console.log('deleted all bookmarks');

      Question.create({
         title: 'What the heck is a bicycle?',
         body: 'seriously?'
      }).then(question => {
         Answer.create({
            body: 'who knows man'
         }).then(answer => {
            question.answers.push(answer);
            question.save();
         });

         Answer.create({
            body: 'i know!'
         }).then(answer => {
            question.answers.push(answer);
            question.save();
         });
      });
   });
});
