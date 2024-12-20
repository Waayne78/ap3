const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // Pour le hachage des mots de passe
const { checkUsername, checkEmail } = require("./utils/validators"); // Fichier utils pour validation (facultatif)

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

app.post("/signup", async (req, res) => {
    const { username, email, password, confirm } = req.body;

    if (!username || !email || !password || !confirm) {
        return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    if (password !== confirm) {
        return res.status(400).json({ message: "Les mots de passe ne correspondent pas" });
    }

    if (!checkUsername(username)) {
        return res.status(400).json({
            message: "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores",
        });
    }

    if (!checkEmail(email)) {
        return res.status(400).json({ message: "Adresse e-mail invalide" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);


        res.status(201).json({ message: "Inscription réussie", username, email });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Une erreur inattendue est survenue" });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
