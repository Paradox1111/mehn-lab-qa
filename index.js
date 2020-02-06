const express = require("express");

const app = express();

const questionsController = require("./controllers/questions");

const cors = require("cors");

//implement middleware
app.use(express.json()); //parse requests
app.use(express.urlencoded({ extended: true })); //allow nested object requests
app.use(cors()); //allow multi-origin requests

app.set("view engine", "hbs");

app.use("/questions", questionsController);

app.listen(6969, () => console.log("Listening on port 6969"));
