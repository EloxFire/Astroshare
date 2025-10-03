import '../styles/pages/contact.scss';

const Contact = () => {
  const handleSubmit = () => {
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
  };

  return (
    <div id="contact" className="contact-page">
      <section className="contact-intro">
        <h1>Entrons en contact</h1>
        <p>
          Une question sur Astroshare ou une idée à partager&nbsp;? Écrivez-nous via ce
          formulaire et nous vous répondrons rapidement.
        </p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="contact-email">Adresse e-mail *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="vous@exemple.com"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-subject">Objet (optionnel)</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="Sujet de votre message"
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Racontez-nous en quelques phrases..."
            rows={6}
            required
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
