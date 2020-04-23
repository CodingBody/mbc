import React from "react";
import styled from "styled-components";
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
import { fetchUserStart } from "../../redux/appUser/appUserActions";
import uuid4 from "uuid4";
import { Button } from "@material-ui/core";
import {
  toggleCreateModal,
  toggleEditModal,
} from "../../redux/modal/modalActions";
import { populateRecordOnEdit } from "../../redux/cud/cudActions";
import { renderTableHeader, getColumns } from "../../utils/Helper";
import { populateColumnNamesOnCreete } from "./../../redux/cud/cudActions";
import CreateModal from "../Modals/create/CreateModal";
import EditModal from "../Modals/edit/EditModal";

const Container = styled.div`
  display: grid;
  border-radius: 10px;
  grid-template-rows: auto auto;
`;

const Header = styled.div`
  background: #2c2c2c;
  color: skyblue;

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

const SdEditIcon = styled(EditIcon)`
  cursor: pointer;
`;

const Table = ({
  match,
  fetchUser,
  users,
  tableHeader,
  toggleCreate,
  toggleEdit,
  populateRecordOnEdit,
  populateColumnNames,
}) => {
  const [input, setInput] = React.useState("");

  const handleSeachbarChange = (e) => {
    setInput(e.target.value);
  };

  const showOneRecord = (user, tableHeader) => {
    const userPropsArray = Object.values(user);

    return (
      <TableBody>
        <td>
          <SdEditIcon
            onClick={() => handleEditClick(userPropsArray, tableHeader)}
          />
        </td>
        {userPropsArray.map((props) => (
          <td key={uuid4()}>{props}</td>
        ))}
      </TableBody>
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchUser(input);
  };

  const handleEditClick = (record, tableHeader) => {
    const formattedRecord = tableHeader.reduce((acc, value) => {
      acc[value] = "";
      return acc;
    }, {});
    let i = 0;
    for (let props in formattedRecord) {
      formattedRecord[props] = record[i];
      i++;
    }

    populateRecordOnEdit(formattedRecord);
    toggleEdit();
  };

  const handleClickCreate = (category) => {
    const obj = getColumns(category);
    console.log(obj, "obj");
    populateColumnNames(obj);
    toggleCreate(obj);
  };

  const { category } = match.params;

  if (!category) return <div>dd</div>;
  if (users)
    return (
      <React.Fragment>
        <CreateModal categor={category} />
        <EditModal category={category} />
        <Container>
          <Header>
            <div>
              <HeadTwo>{category}</HeadTwo>
            </div>
            <div>
              <Button
                onClick={() => handleClickCreate(category)}
                size="large"
                variant="contained"
              >
                Create
              </Button>
            </div>
          </Header>
          <Main>
            <SearchBar
              handleSearchSubmit={handleSearchSubmit}
              handleSeachbarChange={handleSeachbarChange}
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
                            <SdEditIcon
                              onClick={() => handleEditClick(user, tableHeader)}
                            />
                          </td>
                          {user.map((u) => (
                            <td key={uuid4()}>{u}</td>
                          ))}
                        </TableBody>
                      ))
                      .slice(0, 10)
                  : showOneRecord(users, tableHeader)}
              </tbody>
            </TableContainer>
            <Info>
              <div>1 row selected </div>
              <div>Total 4</div>
            </Info>
          </Main>
        </Container>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <CreateModal />
      <EditModal />
      <Container>
        <Header>
          <div>
            <HeadTwo>{category}</HeadTwo>
          </div>
          <div>
            <Button
              onClick={() => handleClickCreate(category)}
              size="large"
              variant="contained"
            >
              Create
            </Button>
          </div>
        </Header>
        <Main>
          <SearchBar
            handleSearchSubmit={handleSearchSubmit}
            handleSeachbarChange={handleSeachbarChange}
            input={input}
          />
          <TableContainer cellspacing="0">
            <TableHeader>{renderTableHeader(category)}</TableHeader>
          </TableContainer>
          <Info>
            <div>1 row selected </div>
            <div>Total 4</div>
          </Info>
        </Main>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.appUser.user,
  tableHeader: state.appUser.tableHeader,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUserStart(userId)),
  toggleCreate: () => dispatch(toggleCreateModal()),
  toggleEdit: () => dispatch(toggleEditModal()),
  populateRecordOnEdit: (record) => dispatch(populateRecordOnEdit(record)),
  populateColumnNames: (record) =>
    dispatch(populateColumnNamesOnCreete(record)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
