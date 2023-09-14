import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        <b>Note: </b>This is fake store only created as a React demo. None of
        the products can be bought here, and the pictures were found at &nbsp;
        <a href="http://www.trumslagaren.se" target="_blank">www.trumslagaren.se</a>.
      </p>
    </footer>
  );
};

export default Footer;
