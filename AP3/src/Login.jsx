import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Utilise useNavigate pour la redirection
import "./Login.css";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook de redirection

  function handleLogin(event) {
    event.preventDefault();
    const { email, password } = formValues;

    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Connexion réussie") {
          setLoading(false);
          navigate("/home"); 
        } else {
          setError(data.message || "Erreur de connexion");
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Une erreur s'est produite");
        setLoading(false);
      });
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Connexion</h1>
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
        <button type="submit" disabled={loading}>
          Connexion
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <span className="loading-ring"></span>}
      </form>
    </div>
  );
}

export default Login;
