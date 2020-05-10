import React from "react";
import styled from "styled-components";
import {
  TableBody,
  TableContainer,
  ColumnNames,
} from "../../styled-component/Table";
import EditIcon from "@material-ui/icons/Edit";
import SearchBar from "../searchBar/SearchBar";
import { HeadTwo } from "../../styled-component/Text";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { toggleCreateModal, toggleEditModal } from "../../redux/modal/actions";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
  getFormFields,
  removeLast,
  removeLastItemInArr,
} from "../../utils/Helper";
import {
  fetchRecordStart,
  populateRecordOnEdit,
  populateColumnNamesOnCreate,
} from "../../redux/main/actions";
import { navbarItem } from "./../../utils/Data";
import {
  primaryDark,
  textPrimary,
  primaryHover,
  disabled,
} from "./../../styled-component/Variable";
import { MuiButton, CheckBoxIco } from "./../../styled-component/Button";
import HeaderSearchBar from "./../searchBar/HeaderSearchBar";
import {
  SpaceBetween,
  FlexStartWithBorder,
  FlexCenter,
} from "../../styled-component/Layout";
import { BasixAni } from "./../../styled-component/Animation";
import { HeadThree } from "./../../styled-component/Text";
import { Box } from "@material-ui/core";
import { getAllColumnNames } from "./../../utils/Helper";

const SdEditIcon = styled(EditIcon)`
  cursor: pointer;
`;

const Table = ({
  fetchRecord,
  data,
  columnNames,
  showTable,
  toggleCreate,
  toggleEdit,
  populateRecordOnEdit,
  populateColumnNames,
  category,
  loading,
  clLength,
}) => {
  const [input, setInput] = React.useState("");
  // @@ code_review_2
  const [columns, setColumns] = React.useState(getAllColumnNames(category));

  React.useEffect(() => {
    setColumns(getAllColumnNames(category));
  }, [category]);
  console.log(columns, "selectedColumns");
  //
  const handleSeachbarChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchRecord({ params: input, category, columns });
  };

  const handleEditClick = (record, columnNames) => {
    const formattedRecord = columnNames.reduce((acc, value) => {
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
    const obj = getFormFields(category);
    populateColumnNames(obj);
    toggleCreate(obj);
  };

  const renderHeader = (category) => {
    if (category) {
      const res = navbarItem.filter((item) => item.params === category);
      if (!res) return <React.Fragment> </React.Fragment>;
      return (
        <React.Fragment>
          {res[0].icon}
          <HeadTwo>{category.toUpperCase()}</HeadTwo>
        </React.Fragment>
      );
    }
  };

  const renderIcon = (category) => {
    if (category) {
      const res = navbarItem.filter((item) => item.params === category);
      if (!res) return <React.Fragment>ddd</React.Fragment>;
      return <React.Fragment>{res[0].icon}</React.Fragment>;
    }
  };

  const toggleFetch = (col) => {
    col.fetch = !col.fetch;
    return col;
  };

  const onClickColumn = (item) => {
    const newC = columns.map((col) =>
      col.id === item.id ? toggleFetch(col) : col
    );
    setColumns(newC);
  };

  return (
    <React.Fragment>
      <SpaceBetween color={textPrimary} mb={3} py={1} px={2}>
        <SpaceBetween>{renderHeader(category)}</SpaceBetween>
        {showTable && (
          <HeaderSearchBar
            handleSearchSubmit={handleSearchSubmit}
            handleSeachbarChange={handleSeachbarChange}
            input={input}
            category={category}
          />
        )}
        <div>
          <MuiButton
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => handleClickCreate(category)}
            variant="contained"
            cr={textPrimary}
            bg={primaryDark}
            border={primaryHover}
            sz="1.5rem"
          >
            Create
          </MuiButton>
        </div>
      </SpaceBetween>

      {!showTable && (
        <SearchBar
          loading={loading}
          renderIcon={renderIcon}
          handleSearchSubmit={handleSearchSubmit}
          handleSeachbarChange={handleSeachbarChange}
          input={input}
          category={category}
          onClickColumn={onClickColumn}
          columns={columns}
        />
      )}

      {data && (
        <BasixAni>
          <TableContainer cellspacing="0">
            <ColumnNames clLength={clLength}>
              <tr>
                <th></th>
                {removeLastItemInArr(columnNames, clLength)}
              </tr>
            </ColumnNames>
            <tbody>
              {data &&
                data.map((record) => (
                  <TableBody clLength={clLength} key={uuid4()}>
                    <td>
                      <SdEditIcon
                        onClick={() => handleEditClick(record, columnNames)}
                      />
                    </td>
                    {removeLast(record, clLength)}
                  </TableBody>
                ))}
            </tbody>
          </TableContainer>
          <FlexStartWithBorder p={1.5}>
            <HeadThree color={textPrimary}>
              {data.length} row selected
            </HeadThree>
            <FlexCenter ml={5}>
              {columns.map((item) => (
                <Box key={item.id} mx={1}>
                  <MuiButton
                    endIcon={
                      <CheckBoxIco cr={item.fetch ? null : `${disabled}`} />
                    }
                    variant="contained"
                    cr={item.fetch ? textPrimary : `${disabled}`}
                    bg={primaryDark}
                    border={primaryHover}
                    onClick={() => onClickColumn(item)}
                    sz="1.1rem"
                  >
                    {item.name}
                  </MuiButton>
                </Box>
              ))}
            </FlexCenter>
          </FlexStartWithBorder>
        </BasixAni>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.main.data,
  columnNames: state.main.columnNames,
  showTable: state.main.showTable,
  loading: state.main.loading,
  clLength: state.main.clLength,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecord: (form) => dispatch(fetchRecordStart(form)),
  toggleCreate: () => dispatch(toggleCreateModal()),
  toggleEdit: () => dispatch(toggleEditModal()),
  populateRecordOnEdit: (record) => dispatch(populateRecordOnEdit(record)),
  populateColumnNames: (record) =>
    dispatch(populateColumnNamesOnCreate(record)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));
