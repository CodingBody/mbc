import React from "react";
import { StyledTextField } from "./../../styled-component/ModalContainer";

const CategoryForm = ({ handleChange, form }) => {
  return (
    <form noValidate autoComplete="off" className="form">
      <StyledTextField
        name="title"
        onChange={handleChange}
        label="title"
        variant="outlined"
        value={form.title}
      />
      <StyledTextField
        name="titleEng"
        onChange={handleChange}
        label="title Eng"
        variant="outlined"
        value={form.titleEng}
      />
      <StyledTextField
        name="genreList"
        onChange={handleChange}
        label="Genre List"
        variant="outlined"
        value={form.genreList}
      />
      <StyledTextField
        name="usageyn"
        onChange={handleChange}
        label="Usageyn"
        variant="outlined"
        value={form.usageyn}
      />
      <StyledTextField
        name="priority"
        onChange={handleChange}
        label="Priority"
        variant="outlined"
        value={form.priority}
      />
      <StyledTextField
        name="created"
        onChange={handleChange}
        label="Created"
        variant="outlined"
        value={form.created}
      />
      <StyledTextField
        name="createdBy"
        onChange={handleChange}
        label="Created By"
        variant="outlined"
        value={form.createdBy}
      />
      <StyledTextField
        name="updated"
        onChange={handleChange}
        label="Updated"
        variant="outlined"
        value={form.updated}
      />
      <StyledTextField
        name="updatedBy"
        onChange={handleChange}
        label="Updated By"
        variant="outlined"
        value={form.updatedBy}
      />
    </form>
  );
};

export default CategoryForm;
