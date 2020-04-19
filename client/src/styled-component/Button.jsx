import styled from "styled-components";
import { Button as Bt } from "@material-ui/core";

export const Button = styled.button`
  padding: 13px;
  border-radius: 3px;
  font-size: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.bg};
  transition: background-color 0.3s;
  color: ${(props) => props.color};
  border: none;
  outline: none;
  cursor: pointer;
  margin: 8px 0;

  :hover {
    background-color: ${(props) =>
      props.color === "#505f6d" ? "#485663" : "#dcdcdc"};
  }
`;

export const MuiButton = styled(Bt)`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cr};
  border: ${(props) => ` 1px solid ${props.border}`};
`;