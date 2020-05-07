import styled from "styled-components";
import { Box } from "@material-ui/core";

export const ContentLeft = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const SpaceBetween = styled(Box)`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cr};
  width: ${(props) => props.width};
`;

export const ContentCenter = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  /* !! if no props, it will be just null */
  margin-bottom: ${(props) => props.mb};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.p};
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`;

export const ColumnDirection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: ${(props) => props.width};
`;

export const BasicForm = styled.form`
  width: ${(props) => props.width};
`;
