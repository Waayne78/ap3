import { useState } from "react";
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
 
  function handleSignup(event) {
    event.preventDefault();
    const { email, password, confirm } = formValues;
 
    if (!email || !password || !confirm) {
      setError("Veuillez remplir tous les champs");
    } else if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas");
    } else {
      setError("");
      setLoading(true);
      setTimeout(() => {
        setSuccess("Inscription réussie");
        setLoading(false);
        window.location.href = "/login";
      }, 3000);
    }
  }
 
  return (
    <>
      <form onSubmit={handleSignup}>
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