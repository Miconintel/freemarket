import React from "react";
import classes from "./Hero.module.css";
import Container from "./Container";
import Button from "./Button";
// import { FiChevronRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <h1>
          Reach Your Customers with freemarket: <span>Unlock</span> New
          Opportunities for Your Business!
        </h1>
        <Container>
          <Button> explore </Button>
          <Button className={classes.outline}> learn more </Button>
        </Container>
      </Container>
    </section>
  );
};

export default Hero;
