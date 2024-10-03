import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer_container">
      <p>© Ähli hukuklar goragly ─ {currentYear} </p>
      <p>
        Made by <strong>Mesut Rahmetow</strong> with ❤️
      </p>
    </div>
  );
};

export default Footer;
