import React from "react";
import styled from "styled-components";
import Navbar from "../../component/navbar/Navbar";
import Header from "./../../component/header/Header";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 50px calc(100vh - 50px);
  /* grid-template-areas:
    "header header header header header header header header header"
    "navbar board board board board board board board board"; */
`;

const Board = styled.div`
  background: #d9d9d9;
  grid-column: 3 / 12;
`;

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Board>ddddddd</Board>
    </Container>
  );
};

export default Dashboard;
