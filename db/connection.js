const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/qa", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

module.exports = mongoose;
