import styled from "styled-components";
import { TextField } from "@material-ui/core/";

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
    font-size: 1.4rem;
  }
  .MuiInputLabel-formControl {
    transform: translate(0, 20px) scale(1);
  }
  .MuiInputLabel-shrink {
    transform: translate(0, -6px) scale(0.85);
  }
`;
