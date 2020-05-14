import styled from "styled-components";
import { TextField, Box } from "@material-ui/core/";

// on modal
export const StdTextFieldOne = styled(TextField)`
  .MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.85);
  }
  .MuiInputLabel-outlined {
    font-size: 1.3rem;
  }
  .MuiInputBase-input {
    font-size: 1.3rem;
  }
`;

// on search bar
export const StdTextFieldTwo = styled(TextField)`
  .MuiInputLabel-root {
    font-size: ${(props) => props.sz};
  }
  .MuiInputLabel-formControl {
    transform: translate(0, 20px) scale(1);
  }
  .MuiInputLabel-shrink {
    transform: translate(0, -6px) scale(0.8);
  }
`;

export const FileInputField = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    opacity: 0;
    height: ${(props) => `calc(${props.ht} - 10px)`};

    cursor: pointer;
    z-index: 2000;
  }

  label {
    width: 100%;
    cursor: pointer;
    height: ${(props) => props.ht};

    display: flex;
    justify-content: center;
    p {
    }
  }
`;
