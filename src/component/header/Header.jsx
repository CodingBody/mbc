import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

const Container = styled.div`
  background: #0c3252;
  grid-column: 1 / 12;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemBox = styled.div`
  padding: 10px;
  div {
    color: white;
    display: flex;
    align-items: center;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
    svg {
      font-size: 2.5rem;
      background-color: #1f2844;
      padding: 3px;
      margin-right: 6px;
      margin-top: 3px;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <ItemBox>
        <div>
          <MenuIcon varient="contained" />
          <h1>DEV 통합 CMS</h1>
        </div>
      </ItemBox>
      <ItemBox>
        <div>
          <p>admin </p>
        </div>
      </ItemBox>
    </Container>
  );
};

export default Header;
