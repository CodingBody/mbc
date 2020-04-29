import React from "react";
import { StyledTextField } from "./../../styled-component/ModalContainer";

function AppUserForm({ handleChange, form }) {
  return (
    <form noValidate autoComplete="off" className="form">
      <StyledTextField
        name="username"
        onChange={handleChange}
        label="username"
        variant="outlined"
        value={form.username}
      />
      <StyledTextField
        name="account"
        onChange={handleChange}
        label="account"
        variant="outlined"
        value={form.account}
      />
      <StyledTextField
        name="password"
        onChange={handleChange}
        label="password"
        type="password"
        variant="outlined"
        value={form.password ? form.password : ""}
      />
      <StyledTextField
        name="password_check"
        onChange={handleChange}
        label="password_check"
        variant="outlined"
        type="password"
        value={form.password_check ? form.password_check : ""}
      />

      <StyledTextField
        name="status"
        onChange={handleChange}
        label="status"
        variant="outlined"
        value={form.status}
      />
      <StyledTextField
        name="sex"
        onChange={handleChange}
        label="sex"
        variant="outlined"
        value={form.sex}
      />

      <StyledTextField
        name="tag"
        onChange={handleChange}
        label="tag"
        variant="outlined"
        value={form.tag}
      />
    </form>
  );
}

export default AppUserForm;
