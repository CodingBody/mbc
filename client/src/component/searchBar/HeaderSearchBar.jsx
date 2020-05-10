import React from "react";
import { BasicForm } from "./../../styled-component/Layout";
import { StdTextFieldTwo } from "../../styled-component/Input";
import { FlexCenterWithAni } from "./../../styled-component/Animation";
import { getSearchBarTitle } from "../../utils/Helper";

const HeaderSearchBar = ({
  input,
  handleSeachbarChange,
  handleSearchSubmit,
  category,
}) => {
  return (
    <FlexCenterWithAni width="100%">
      <BasicForm onSubmit={handleSearchSubmit} width="50%">
        <StdTextFieldTwo
          onChange={handleSeachbarChange}
          value={input}
          label={`${getSearchBarTitle(category)}...`}
          sz="1.3rem"
          fullWidth
        />
      </BasicForm>
    </FlexCenterWithAni>
  );
};

export default HeaderSearchBar;
