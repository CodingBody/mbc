import React from "react";
import styled from "styled-components";
import Navbar from "../../component/navbar/Navbar";
import Header from "./../../component/header/Header";
import Board from "./../../component/board/Board";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearTableOnRouteChange } from "../../redux/main/actions";
import CreateModal from "../../component/Modals/create/CreateModal";
import EditModal from "../../component/Modals/edit/EditModal";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.shrink ? "25px 25px 50px" : "repeat(13, 1fr)"};
  grid-template-rows: 50px calc(100vh - 50px);
`;

const Dashboard = ({ match, clearTableOnRouteChange }) => {
  const { category } = match.params;

  React.useEffect(() => {
    if (category !== null) {
      clearTableOnRouteChange();
    }
  }, [category]);

  const [shrink, setShrink] = React.useState(false);
  if (!category) return <div>dd</div>;

  return (
    <Container shrink={shrink ? "shrink" : null}>
      <Header shrink={shrink} setShrink={setShrink} />
      <Navbar category={category} shrink={shrink} />
      <Board category={category} />
      <CreateModal category={category} />
      <EditModal category={category} />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearTableOnRouteChange: () => dispatch(clearTableOnRouteChange()),
});

export default withRouter(connect(null, mapDispatchToProps)(Dashboard));
