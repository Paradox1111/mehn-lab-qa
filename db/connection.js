const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

module.exports = mongoose;
