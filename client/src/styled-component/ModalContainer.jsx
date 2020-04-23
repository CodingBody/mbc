import styled from "styled-components";
import { TextField } from "@material-ui/core/";

export const FeedBackModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  background-color: #eee;

  .header {
    padding: 20px;
    display: flex;
    margin-bottom: 20px;

    background-color: #2c2c2c;
    justify-content: space-between;
  }

  .feedback-input {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    textarea {
      padding: 10px;
    }
  }

  .iconBox {
    padding: 0 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;

    div:nth-child(2) {
      div:nth-child(2) {
        margin: 0 2rem;
      }
    }
    div {
      display: flex;

      div:nth-child(1) {
        background: white;
        padding: 10px;
        cursor: pointer;
        border: ${(props) =>
          props.selectedEmoji === 1 ? "1px solid #13e213" : null};
        svg {
          font-size: 11rem;
          color: ${(props) =>
            props.selectedEmoji === 1 ? "#13e213" : "#15d815a1"};
        }
        :hover svg {
          color: #13e213;
        }
      }
      div:nth-child(2) {
        background: white;
        padding: 10px;
        cursor: pointer;
        border: ${(props) =>
          props.selectedEmoji === 2 ? "1px solid #ffe000" : null};
        svg {
          font-size: 11rem;
          color: ${(props) =>
            props.selectedEmoji === 2 ? "#ffff2b" : "#fbfb3f9e"};
        }

        :hover svg {
          color: #ffff2b;
        }
      }
      div:nth-child(3) {
        background: white;
        padding: 10px;
        cursor: pointer;
        border: ${(props) =>
          props.selectedEmoji === 3 ? "1px solid #ff5656" : null};
        svg {
          font-size: 11rem;
          color: ${(props) =>
            props.selectedEmoji === 3 ? "#ff5656" : " #ff5656a1"};
        }

        :hover svg {
          color: #ff5656;
        }
      }
    }
  }

  .buttonGroup {
    background-color: #2c2c2c;

    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;

    button {
      margin: 0 5px;
    }
  }
`;

export const EditModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  background-color: #eee;
  width: 49rem;

  .header {
    padding: 20px;
    display: flex;
    margin-bottom: 20px;

    background-color: #2c2c2c;
    justify-content: space-between;
  }

  .form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    padding: 20px;
    div {
      margin: 0 0 10px 0;
    }
  }

  .iconBox {
    padding: 20px;
    display: flex;
    flex-direction: column;

    div:nth-child(2) {
      div:nth-child(2) {
        margin: 0 2rem;
      }
    }
    div {
      display: flex;

      div:nth-child(1) {
        background: white;
        padding: 10px;
        cursor: pointer;
        border: ${(props) =>
          props.selectedEmoji === 1 ? "1px solid #13e213" : null};
        svg {
          font-size: 11rem;
          color: ${(props) =>
            props.selectedEmoji === 1 ? "#13e213" : "#15d815a1"};
        }
        :hover svg {
          color: #13e213;
        }
      }
      div:nth-child(2) {
        background: white;
        padding: 10px;
        cursor: pointer;
        border: ${(props) =>
          props.selectedEmoji === 2 ? "1px solid #ffe000" : null};
        svg {
          font-size: 11rem;
          color: ${(props) =>
            props.selectedEmoji === 2 ? "#ffff2b" : "#fbfb3f9e"};
        }

        :hover svg {
          color: #ffff2b;
        }
      }
      div:nth-child(3) {
        background: white;
        padding: 10px;
        cursor: pointer;
        border: ${(props) =>
          props.selectedEmoji === 3 ? "1px solid #ff5656" : null};
        svg {
          font-size: 11rem;
          color: ${(props) =>
            props.selectedEmoji === 3 ? "#ff5656" : " #ff5656a1"};
        }

        :hover svg {
          color: #ff5656;
        }
      }
    }
  }
  .buttonGroup {
    background-color: #2c2c2c;

    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    button {
      margin: 0 5px;
    }
  }
`;

export const StyledTextField = styled(TextField)`
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
