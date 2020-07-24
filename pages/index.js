import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import Stories from "../components/Main/Stories/Stories";
import Feed from "../components/Main/Feed/Feed";

export default ({ stories, feed }) => {
  return (
    <Container>
      <Stories stories={stories} />
      <Feed feed={feed} />
    </Container>
  );
};

export async function getStaticProps() {
  const storiesRes = await fetch("http://localhost:3000/api/stories");
  const feedRes = await fetch("http://localhost:3000/api/feed");

  const feed = await feedRes.json();
  const stories = await storiesRes.json();

  return {
    props: {
      stories: stories.data,
      feed: feed.data,
    },
  };
}

const Container = styled.div`
  position: relative;
`;
