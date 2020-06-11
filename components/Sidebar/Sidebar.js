import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <Container>
      <Navigation />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 100%;
  position: fixed;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
