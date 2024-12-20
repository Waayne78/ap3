const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Imports des fichiers locaux
const medicationRoute = require("./routes/medication.js");
const doctorRoute = require("./routes/doctor.js");
const patientRoute = require("./routes/appointment.js");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/medication", medicationRoute);
app.use("/doctor", doctorRoute);
app.use("/patient", patientRoute);

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "An unexpected error occurred" });
});

// Démarrage du serveur
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
