import React from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CropLandscapeOutlinedIcon from "@material-ui/icons/CropLandscapeOutlined";
import { navbarItem } from "../../data/Data";
const Container = styled.div`
  background: #2c2c2c;
  grid-column: 1 / 3;
`;

const SubContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const LinkBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #353535;
  }

  div {
    padding: 9px 0 9px 10px;

    display: flex;
    justify-content: flex-start;
    svg {
      font-size: 2.3rem;
      margin-right: 1rem;
      color: #fff;
    }
  }

  div:last-child {
    padding: 10px 10px 10px 0;

    i {
      border: solid #ffffff94;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
    :hover i {
      border: solid #fffffff0;
      border-width: 0 3px 3px 0;
    }
  }
`;

const SubLink = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;

  li {
    background-color: #353535;
    transition: background-color 0.3s ease;
    align-items: center;
    justify-content: flex-start;
    color: white;
    height: 33px;
    display: flex;
    :hover {
      background-color: #525252;
    }
    p {
      font-size: 1.2rem;
      letter-spacing: 0.5px;
    }
    svg {
      font-size: 1rem;
      margin-right: 5px;
    }
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: #fff;
  margin-top: 4px;
`;
console.log(navbarItem);
const Navbar = () => {
  return (
    <Container>
      <SubContainer>
        {navbarItem &&
          navbarItem.map((item) => (
            <React.Fragment>
              <LinkBox id={item.link}>
                <div>
                  <HomeOutlinedIcon />
                  <Text>{item.link}</Text>
                </div>

                <div>
                  <i></i>
                </div>
              </LinkBox>
              {item.subLink ? (
                <SubLink>
                  {item.subLink.map((link) => (
                    <li id={link}>
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <CropLandscapeOutlinedIcon />
                      <p> {link}</p>
                    </li>
                  ))}
                </SubLink>
              ) : null}
            </React.Fragment>
          ))}
      </SubContainer>
    </Container>
  );
};

export default Navbar;
