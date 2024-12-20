import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function validatePassword(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  }

  function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
  }

  function handleSignup(event) {
    event.preventDefault();
    const { username, email, password, confirm } = formValues;

    if (!email || !password || !confirm) {
      setError("Veuillez remplir tous les champs");
    } else if (!validatePassword(password)) {
      setError(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
      );
    } else if (!validateUsername(username)) {
      setError(
        "Le nom d'utilisateur ne peut contenir que des lettres, des chiffres et des underscores."
      );
    } else if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas");
    } else {
      setError("");
      setLoading(true);

      fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirm }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Inscription réussie") {
            setSuccess("Inscription réussie");
            setLoading(false);
            navigate("/login"); 
          }
        })
        .catch((err) => {
          setError("Une erreur s'est produite");
          setLoading(false);
        });
    }
  }

  return (
    <>
      <form onSubmit={handleSignup} className="signup-form">
        <h1>Inscription</h1>
        <label>Nom d'utilisateur</label>
        <input
          type="text"
          value={formValues.username}
          onChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
        />
        <label>Email</label>
        <input
          type="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <label>Mot de passe</label>
        <input
          type="password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
        />
        <label>Confirmer le mot de passe</label>
        <input
          type="password"
          value={formValues.confirm}
          onChange={(e) =>
            setFormValues({ ...formValues, confirm: e.target.value })
          }
        />
        <button type="submit" disabled={loading}>
          {"S'inscrire"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        {loading && <span className="loading-ring"></span>}
      </form>
    </>
  );
}

export default Signup;
