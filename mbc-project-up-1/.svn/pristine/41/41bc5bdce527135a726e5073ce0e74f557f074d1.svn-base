import React from "react";
import styled from "styled-components";
import { MuiButton } from "../../styled-component/Button";
import {
  TableBody,
  TableContainer,
  TableHeader,
  Info,
} from "../../styled-component/Table";
import EditIcon from "@material-ui/icons/Edit";
import SearchBar from "../searchBar/SearchBar";
import { HeadTwo } from "../../styled-component/Text";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserStart } from "../../redux/actions-types/appUserActions";
import uuid4 from "uuid4";
import { Button } from "@material-ui/core";

const Container = styled.div`
  display: grid;
  border-radius: 10px;
  grid-template-rows: auto auto;
`;

const Header = styled.div`
  background: #2c2c2c;
  color: skyblue;

  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: 2px groove #cecece73;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Main = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-left: 2px groove #cecece73;
  border-right: 2px groove #cecece73;
  border-bottom: 2px groove #cecece73;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Table = ({ match, fetchUser, users, tableHeader }) => {
  const [input, setInput] = React.useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const myFn = (user) => {
    const userPropsArray = Object.values(user);
    console.log(user);

    return (
      <TableBody>
        <td>
          <EditIcon />
        </td>
        {userPropsArray.map((props) => (
          <td key={uuid4()}>{props}</td>
        ))}
      </TableBody>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    fetchUser(input);
  };
  console.log(users, "users");
  if (users)
    return (
      <Container>
        <Header>
          <div>
            <HeadTwo>Category</HeadTwo>
          </div>
          <div>
            <Button size="large" variant="contained">
              Create
            </Button>
          </div>
        </Header>
        <Main>
          <SearchBar
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            input={input}
          />
          <TableContainer cellspacing="0">
            <TableHeader>
              <tr>
                <th></th>
                {tableHeader.map((header) => (
                  <th key={uuid4()}>{header}</th>
                ))}
              </tr>
            </TableHeader>
            <tbody>
              {Array.isArray(users)
                ? users
                    .map((user) => (
                      <TableBody key={uuid4()}>
                        <td>
                          <EditIcon />
                        </td>
                        {user.map((u) => (
                          <td key={uuid4()}>{u}</td>
                        ))}
                      </TableBody>
                    ))
                    .slice(0, 10)
                : myFn(users)}
            </tbody>
          </TableContainer>
          <Info>
            <div>1 row selected </div>
            <div>Total 4</div>
          </Info>
        </Main>
      </Container>
    );
  return (
    <Container>
      <Header>
        <div>
          <HeadTwo>Category</HeadTwo>
        </div>
        <div>
          <Button size="large" variant="contained">
            Create
          </Button>
        </div>
      </Header>
      <Main>
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          input={input}
        />
        <TableContainer cellspacing="0">
          <TableHeader>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Title Eng</th>
              <th>Genre List</th>
              <th>Usageyn</th>
              <th>Priority</th>
              <th>Created</th>
              <th>Created By</th>
              <th>Updated</th>
              <th>Updated By</th>
            </tr>
          </TableHeader>
          <tbody>
            <TableBody>
              <td>
                <EditIcon />
              </td>
              <td>ddddddd</td>
              <td>ddddddd</td>
              <td>ddddddd</td>
              <td>ddddddd</td>
              <td>ddddddd</td>
              <td>ddddddd</td>
              <td>ddddddd</td>
              <td>ddddddd</td>
              <td>ddddddd</td>
            </TableBody>
          </tbody>
        </TableContainer>
        <Info>
          <div>1 row selected </div>
          <div>Total 4</div>
        </Info>
      </Main>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  users: state.appUser.user,
  tableHeader: state.appUser.tableHeader,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUserStart(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
