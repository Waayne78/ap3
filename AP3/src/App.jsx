import { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchDoctor = () => {
    // Logique pour la recherche de docteurs
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="app">
      <header className="app-header">
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
      
      <section className="featured-section">
        <h2>Popular Specialties</h2>
        <div className="specialties-grid">
          <div className="specialty-card">General Practitioner</div>
          <div className="specialty-card">Dentist</div>
          <div className="specialty-card">Dermatologist</div>
          <div className="specialty-card">Pediatrician</div>
        </div>
      </section>
    </div>
  );
}

export default App;
