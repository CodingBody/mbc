import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderMunu from "./HeaderMenu";
import FeedBackDialog from "../Dialog/feedback/FeedbackDialog";

const Container = styled.div`
  background: #fff;
  grid-column: 1 / 14;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemBoxLeft = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    h1 {
      font-size: 2rem;
      color: #000;
    }

    svg {
      font-size: 3rem;
      background-color: #fff;
      padding: 3px;
      color: #000;
      margin-top: 3px;
      border: 1px solid #000;
      border-radius: 2px;
      cursor: pointer;
    }
  }
`;

const ItemBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 20px;
  div {
    padding: 0 10px;
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
    svg {
      font-size: 2rem;
    }
  }
`;

const Header = ({ setShrink, shrink }) => {
  return (
    <Container>
      <ItemBoxLeft>
        <div onClick={() => setShrink(!shrink)}>
          <MenuIcon />
        </div>
        <div>
          <h1>DEV 통합 CMS</h1>
        </div>
      </ItemBoxLeft>
      <ItemBoxRight>
        <FeedBackDialog />
        <HeaderMunu />
        <HeaderMunu admin={true} />
      </ItemBoxRight>
    </Container>
  );
};

export default Header;
