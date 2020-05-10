import styled from "styled-components";
import { Box } from "@material-ui/core";
import { primaryHover } from "./Variable";

export const FlexStart = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexEnd = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const SpaceBetween = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.bg};
  color: ${(props) => props.cr};
  width: ${(props) => props.width};
`;

export const FlexCenter = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: ${(props) => props.wrap};
`;

export const Form = styled.form`
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

export const FlexStartWithBorder = styled(FlexStart)`
  border-top: 1px solid ${primaryHover};
  border-right: 2px solid ${primaryHover};
  border-left: 2px solid ${primaryHover};
  border-bottom: 2px solid ${primaryHover};
`;
