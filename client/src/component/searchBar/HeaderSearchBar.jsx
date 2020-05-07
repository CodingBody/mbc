import React from "react";
import { ContentCenter, BasicForm } from "./../../styled-component/Layout";
import { StdTextFieldTwo } from "../../styled-component/Input";

const HeaderSearchBar = ({
  input,
  handleSeachbarChange,
  handleSearchSubmit,
}) => {
  return (
    <ContentCenter width="100%">
      <BasicForm onSubmit={handleSearchSubmit} width="50%">
        <StdTextFieldTwo
          onChange={handleSeachbarChange}
          value={input}
          label="Title..."
          size="1.3rem"
          fullWidth
        />
      </BasicForm>
    </ContentCenter>
  );
};

export default HeaderSearchBar;
