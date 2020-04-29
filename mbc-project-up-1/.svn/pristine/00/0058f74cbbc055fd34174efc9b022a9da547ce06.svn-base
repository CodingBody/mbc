import React from "react";
import styled from "styled-components";
import Navbar from "../../component/navbar/Navbar";
import Header from "./../../component/header/Header";
import Board from "./../../component/board/Board";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.shrink ? "25px 25px 50px" : "repeat(13, 1fr)"};
  grid-template-rows: 50px calc(100vh - 50px);
`;

const Dashboard = () => {
  const [shrink, setShrink] = React.useState(false);
  return (
    <Container shrink={shrink ? "shrink" : null}>
      <Header shrink={shrink} setShrink={setShrink} />
      <Navbar shrink={shrink} />
      <Board />
    </Container>
  );
};

export default Dashboard;
