import { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchDoctor = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">MediBook</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#specialties">Specialties</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="app-header" id="home">
        <h1>Find a Doctor and Book an Appointment</h1>
        <p>Your health, our priority.</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a doctor or specialty..."
        />
        <button onClick={searchDoctor}>Search</button>
      </div>

      <section className="featured-section" id="specialties">
        <h2>Popular Specialties</h2>
        <div className="specialties-grid">
          <div className="specialty-card">General Practitioner</div>
          <div className="specialty-card">Dentist</div>
          <div className="specialty-card">Dermatologist</div>
          <div className="specialty-card">Pediatrician</div>
        </div>
      </section>

      <section className="doctors-section" id="doctors">
        <h2>Top Doctors</h2>
        <div className="doctors-grid">
          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Doctor" />
            <h3>Dr. John Doe</h3>
            <p>General Practitioner</p>
            <button>Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Doctor" />
            <h3>Dr. Jane Smith</h3>
            <p>Dentist</p>
            <button>Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Doctor" />
            <h3>Dr. Alan Brown</h3>
            <p>Dermatologist</p>
            <button>Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Doctor" />
            <h3>Dr. Emma Wilson</h3>
            <p>Pediatrician</p>
            <button>Book Appointment</button>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <p>&copy; 2024 MediBook. All rights reserved.</p>
          <p>Contact us: <a href="mailto:info@medibook.com">info@medibook.com</a></p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook-icon.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/twitter-icon.svg" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;