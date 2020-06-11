import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import Stories from "./Stories";

const variants = {
  open: {
    width: "calc(100% - 250px)",
    borderTopLeftRadius: "40px",
    borderBottomLeftRadius: "40px",
  },
  closed: {
    width: "100%",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
  },
};

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 200,
};

const Main = ({ isMenuOpen, setIsMenuOpen, stories }) => {
  return (
    <Container
      animate={isMenuOpen ? "open" : "closed"}
      variants={variants}
      transition={spring}
      initial={false}
    >
      <Topbar>
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Navbar />
      </Topbar>
      <Stories stories={stories} />
    </Container>
  );
};

export default Main;

const Container = styled(motion.div)`
  float: right;
  height: 100%;
  background: white;
  box-shadow: -49px 0px 154px rgba(27, 39, 50, 0.09);
  padding: 2rem;
  z-index: 4;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
`;
