const express = require("express");
const db = require("./database/database.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const medicationRoute = require("./routes/medication");
const doctorRoute = require("./routes/doctor");
const patientRoute = require("./routes/appointment");
app.use(bodyParser.json());

app.use(cors());

app.use("/medication", medicationRoute);
app.use("/doctor", doctorRoute);
app.use("/patient", patientRoute);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
