const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear} Copyright
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/066den/react-movies"
            target="_blank"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
