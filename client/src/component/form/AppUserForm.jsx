import React from "react";
import { StdTextFieldOne } from "./../../styled-component/Input";

function AppUserForm({ handleChange, form }) {
  return (
    <form noValidate autoComplete="off" className="form">
      <StdTextFieldOne
        name="username"
        onChange={handleChange}
        label="username"
        variant="outlined"
        value={form.username}
      />
      <StdTextFieldOne
        name="account"
        onChange={handleChange}
        label="account"
        variant="outlined"
        value={form.account}
      />
      <StdTextFieldOne
        name="password"
        onChange={handleChange}
        label="password"
        type="password"
        variant="outlined"
        value={form.password ? form.password : ""}
      />
      <StdTextFieldOne
        name="password_check"
        onChange={handleChange}
        label="password_check"
        variant="outlined"
        type="password"
        value={form.password_check ? form.password_check : ""}
      />

      <StdTextFieldOne
        name="status"
        onChange={handleChange}
        label="status"
        variant="outlined"
        value={form.status}
      />
      <StdTextFieldOne
        name="sex"
        onChange={handleChange}
        label="sex"
        variant="outlined"
        value={form.sex}
      />

      <StdTextFieldOne
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
