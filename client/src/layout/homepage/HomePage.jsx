import React, { useState } from "react";
import styled from "styled-components";
import vr from "../../assets/vr-1.jpg";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { withRouter } from "react-router-dom";
import { Button } from "./../../styled-component/Button";
import { HeadOne, HeadTwo } from "./../../styled-component/Text";
import { connect } from "react-redux";
import { userLoginStart } from "../../redux/auth/actions";

const Container = styled.div`
  height: 100vh;
  background-image: url(${vr});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 45rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;
`;

const TitleBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  div:nth-child(1) {
    width: 70%;
    border-bottom: 1px solid #b2b2b2;
    height: 8rem;
    background-color: #ffffff33;
    z-index: 10;
    margin-bottom: 30px;
  }
  div:nth-child(2) {
    position: absolute;
    top: 40px;
    right: 80px;
  }
  div:last-child {
    margin-bottom: 10px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextField = styled.div`
  position: relative;

  input {
    width: 100%;
    margin: 8px 0;
    padding: 1rem 1rem 1rem 4rem;
    background-color: #fafafa;
    border: 2px solid #cacaca;
    transition: opacity 3s ease-in-out;

    :focus {
      border: 2px solid #5a56c1d6;
      outline: none;
    }
    :focus ~ svg {
      color: #5a56c1d6;
      opacity: 1;
    }
  }

  svg {
    font-size: 23px;
    position: absolute;
    top: 14px;
    left: 8px;
    opacity: 0.3;
  }

  select {
    width: 100%;
    margin: 10px 0;
    padding: 10px 10px;
    background-color: #fafafa;
    border: 2px solid #cacaca;
    :focus {
      border: 2px solid #5a56c1d6;
      outline: none;
    }
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: ${(props) => props.color || `#eee`};
    transition: background-color 0.2s;
  }

  :hover input ~ span {
    background-color: ${(props) => props.color || `#ccc`};
  }

  label {
    font-size: 1.2rem;
    margin-left: 30px;
  }

  span:after {
    content: "";
    position: absolute;
    display: ${(props) => props.display || `none`};
  }

  span:after {
    left: 8px;
    top: 5px;
    width: 6px;
    height: 12px;
    border: 1px solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const HomePage = ({ history, login }) => {
  const [form, setForm] = useState({
    workspace_name: "react",
    name: "react",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = () => {
    setForm({
      ...form,
      remember: !form.remember,
    });
  };

  const handleSubmit = () => {
    login({ form, history });
  };

  return (
    <Container>
      <FormContainer>
        <TitleBox>
          <div>
            <HeadOne sz="7rem" color="#15159ae0">
              EPIC
            </HeadOne>
          </div>
          <div>
            <HeadOne sz="6rem">LIVE</HeadOne>
          </div>
          <div>
            <HeadTwo sz="2rem" color="">
              VR CMS
            </HeadTwo>
          </div>
        </TitleBox>
        <form action="">
          <Form>
            <TextField>
              <label htmlFor="Language">Language</label>
              <select id="Language">
                <option value="english">English</option>
                <option value="korean">Korean</option>
              </select>
            </TextField>

            <TextField>
              <input
                placeholder="Service Name"
                value={form.workspace_name}
                name="workspace_name"
                required
                onChange={handleChange}
                type="text"
              />
              <MenuBookIcon />
            </TextField>
            <TextField>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="User Name"
              />
              <PersonOutlineIcon />
            </TextField>
            <TextField>
              <input
                placeholder="Password"
                value={form.password}
                name="password"
                required
                onChange={handleChange}
                type="password"
              />
              <LockOpenIcon />
            </TextField>
            <CheckBox
              display={form.remember ? "block" : null}
              color={form.remember ? "#445ed0e6" : null}
            >
              <input
                type="checkbox"
                id="remember"
                name="remember"
                onChange={handleCheck}
                defaultChecked={form.remember}
              />
              <span onClick={handleCheck}></span>
              <label htmlFor="remember"> Remember username</label>
            </CheckBox>
          </Form>
        </form>
        <Button onClick={handleSubmit} bg="#2c2c2c" color="#fff">
          Sign In
        </Button>
        <Button bg="#fff" color="#000">
          Don't have any service? Sign Up
        </Button>
      </FormContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(userLoginStart(payload)),
});

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
