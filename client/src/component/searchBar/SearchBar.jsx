import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { HeadTwo } from "./../../styled-component/Text";
import { MainBox, Main } from "./../../styled-component/Table";
import { StdTextFieldTwo } from "./../../styled-component/Input";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { MuiButton } from "../../styled-component/Button";
import {
  textPrimary,
  primaryDark,
  primaryHover,
} from "../../styled-component/Variable";
import { ContentLeft } from "./../../styled-component/Layout";
import SearchIcon from "@material-ui/icons/Search";

const Container = styled.div`
  width: 100%;
`;

const SearchBar = ({
  input,
  renderIcon,
  handleSearchSubmit,
  handleSeachbarChange,
  category,
}) => {
  return (
    <React.Fragment>
      <MainBox>
        <Main border={10} borderColor="secondary.dark">
          <Box p={2} mb={2}>
            <HeadTwo> {renderIcon(category)} Search Title ... </HeadTwo>
          </Box>
          <Box p={2} mb={2}>
            <Container>
              <StdTextFieldTwo
                fullWidth
                value={input}
                label="Title..."
                name="search"
                onChange={handleSeachbarChange}
              />
            </Container>
          </Box>
          <ContentLeft p={2} mb={2}>
            <MuiButton
              startIcon={<SearchIcon />}
              onClick={handleSearchSubmit}
              variant="contained"
              cr={textPrimary}
              bg={primaryDark}
              border={primaryHover}
              size="1.5rem"
            >
              Search
            </MuiButton>
          </ContentLeft>
        </Main>
      </MainBox>
    </React.Fragment>
  );
};

export default SearchBar;
