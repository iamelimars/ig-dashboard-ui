import React from "react";
import styled from "styled-components";

const Story = ({ story }) => {
  return <Container url={story.url}></Container>;
};

export default Story;

const Container = styled.div`
  display: inline-block;
  background: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  min-width: 8rem;
  height: 12rem;
  margin: 0 1rem;
  border-radius: 8px;
`;
