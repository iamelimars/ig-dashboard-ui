import React, { useState } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";

export default ({ stories }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Main
        stories={stories}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Sidebar />
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/stories");
  const data = await res.json();

  return {
    props: {
      stories: data.data,
    },
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.background};
  z-index: 0;
`;
