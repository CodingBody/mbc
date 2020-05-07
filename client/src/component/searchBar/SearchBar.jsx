import React from "react";
import { Box } from "@material-ui/core";
import { HeadTwo } from "./../../styled-component/Text";
import { StdTextFieldTwo } from "./../../styled-component/Input";
import { MuiButton } from "../../styled-component/Button";
import {
  textPrimary,
  primaryDark,
  primaryHover,
} from "../../styled-component/Variable";
import {
  ContentLeft,
  ContentCenter,
  ColumnDirection,
  BasicForm,
} from "./../../styled-component/Layout";
import SearchIcon from "@material-ui/icons/Search";
import { getSearchBarTitle } from "../../utils/Helper";

const SearchBar = ({
  input,
  renderIcon,
  handleSearchSubmit,
  handleSeachbarChange,
  category,
  loading,
}) => {
  return (
    <React.Fragment>
      <ContentCenter>
        <ColumnDirection width="50%" border={10} borderColor="secondary.dark">
          <Box p={2} mb={2}>
            <HeadTwo>
              {" "}
              {renderIcon(category)} Search {getSearchBarTitle(category)} ...{" "}
            </HeadTwo>
          </Box>
          <Box p={2} mb={2}>
            <BasicForm width="100%" onSubmit={handleSearchSubmit}>
              <StdTextFieldTwo
                fullWidth
                value={input}
                label="Title..."
                size="1.4rem"
                onChange={handleSeachbarChange}
              />
            </BasicForm>
          </Box>
          <ContentLeft p={2} mb={2}>
            <MuiButton
              startIcon={<SearchIcon />}
              onClick={handleSearchSubmit}
              variant="contained"
              cr={textPrimary}
              bg={primaryDark}
              border={primaryHover}
              disabled={loading}
              size="1.5rem"
            >
              Search
            </MuiButton>
          </ContentLeft>
        </ColumnDirection>
      </ContentCenter>
    </React.Fragment>
  );
};

export default SearchBar;
