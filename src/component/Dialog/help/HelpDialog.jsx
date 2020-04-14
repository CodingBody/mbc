import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styled from "styled-components";
import MoodIcon from "@material-ui/icons/Mood";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import { MuiButton } from "../../../styled-component/Button";
import { HeadTwo, Close } from "../../../styled-component/Text";
import { Text } from "../../../styled-component/Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  background-color: #eee;

  .header {
    padding: 20px;
    display: flex;

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
    justify-content: flex-end;

    button {
      margin: 0 5px;
    }
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HelpDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [emoji, setEmoji] = React.useState(1);

  const [feedback, setFeedback] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {};
  console.log(emoji, "emoji");
  return (
    <div>
      <Button onClick={handleClickOpen}>
        <ChatBubbleOutlineIcon />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <Container selectedEmoji={emoji}>
          <div className="header">
            <HeadTwo color="#eee">Feedback</HeadTwo>
            <Close onClick={handleClose}>x</Close>
          </div>
          <div className="iconBox">
            <div>
              <Text size="">Experience</Text>
            </div>
            <div>
              <div onClick={() => setEmoji(1)}>
                <MoodIcon />
              </div>
              <div onClick={() => setEmoji(2)}>
                <SentimentSatisfiedIcon />
              </div>
              <div onClick={() => setEmoji(3)}>
                <SentimentVeryDissatisfiedIcon />
              </div>
            </div>
          </div>
          <div className="feedback-input">
            <textarea
              value={feedback}
              onChange={handleChange}
              placeholder="feedback"
              id="w3mission"
              rows="8"
              cols="55"
            ></textarea>
          </div>
          <div className="buttonGroup">
            <MuiButton
              bg="inherit"
              size="large"
              cr="#eee"
              border="#000"
              onClick={handleClose}
            >
              Cancel
            </MuiButton>
            <MuiButton
              bg="inherit"
              size="large"
              cr="#eee"
              border="#000"
              onClick={handleClose}
            >
              Submit Feedback
            </MuiButton>
          </div>
        </Container>
      </Dialog>
    </div>
  );
};

export default HelpDialog;
