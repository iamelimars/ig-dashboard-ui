import React, { useState } from "react";
import styled from "styled-components";
import Story from "./Story";
import { useEmblaCarousel } from "embla-carousel-react";

const Stories = ({ stories }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  return (
    <Container>
      <h1>STORIES</h1>
      <EmblaCarouselReact>
        <div style={{ display: "flex" }}>
          {stories &&
            stories.map((story) => <Story key={story.url} story={story} />)}
        </div>
      </EmblaCarouselReact>
    </Container>
  );
};

export default Stories;

const Container = styled.div`
  /* width: 100%; */
  .scrollContainer {
    height: 100px;
  }
  h1 {
    color: ${({ theme }) => theme.lightGray};
    font-weight: 900;
    letter-spacing: -0.03em;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
