import './NoPage.css';

const NoPage = () => {
  return (
    <div className="no-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oups ! La page que vous cherchez n'existe pas.</p>
        <a href="/" className="go-home">Retour à l'accueil</a>
      </div>
    </div>
  );
};

export default NoPage;
