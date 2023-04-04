import classes from "./Header.module.css";
import logo from "./../whitelogo-04.svg";
import Button from "./Button";
const Header = () => {
  // const classMember = `${classes.header} ${classes.grid}`;
  return (
    <header className={`${classes.header} ${classes.grid}`}>
      <nav>
        <img src={logo} alt="my logo" />
        <ul>
          <li className={classes.item}>
            <a href="#r">solution</a>
          </li>
          <li>
            <a href="#r">pricing</a>
          </li>
          <li>
            <a href="#r">blog</a>
          </li>
          <li>
            <a href="#r">contact</a>
          </li>
        </ul>

        <Button>explore</Button>
      </nav>
    </header>
  );
};

export default Header;
