import React from "react";
import styled from "styled-components";
import { Home, Compass, Tv, Notifications, Plane, Graph } from "../Svg/Svg";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <Container>
      <NavLink href="/">
        <a>
          <Home />
          Feed
        </a>
      </NavLink>
      <NavLink href="/explore">
        <a>
          <Compass /> Explore
        </a>
      </NavLink>
      <a>
        <Tv />
        IGTV
      </a>
      <a>
        <Notifications />
        Notifications
      </a>
      <a>
        <Plane />
        Direct
      </a>
      <a>
        <Graph />
        Insights
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .selected {
    color: ${({ theme }) => theme.primary};

    path {
      fill: ${({ theme }) => theme.primary};
    }

    .bell {
      stroke: ${({ theme }) => theme.primary};
      fill: none;
    }
  }
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.accent};
    margin: 0.7rem 0;
    cursor: pointer;
    font-size: 0.7rem;
    transition: all 0.2s ease-in;
    text-decoration: none;
    path {
      transition: all 0.2s ease-in;
    }
    &:hover {
      color: ${({ theme }) => theme.primary};

      path {
        fill: ${({ theme }) => theme.primary};
      }

      .bell {
        stroke: ${({ theme }) => theme.primary};
        fill: none;
      }
    }
  }

  svg {
    margin-right: 2rem;
  }
`;

export default Navigation;
