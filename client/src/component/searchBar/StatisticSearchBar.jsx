import React from "react";
import { SpaceBetween, FlexEnd } from "../../styled-component/Layout";
import {
  textPrimary,
  primaryDark,
  primaryHover,
} from "../../styled-component/Variable";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import { MuiButton } from "../../styled-component/Button";

const StatisticSearchBar = ({
  startDate,
  endDate,
  handleEndDateChange,
  handleStartDateChange,
  handleSubmit,
}) => {
  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <SpaceBetween mb={1} px={1}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            id="Start Date"
            label="Start Date"
            value={startDate}
            onChange={(e) => handleStartDateChange(e)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            id="Start Date"
            label="Start Date"
            value={endDate}
            onChange={(e) => handleEndDateChange(e)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </SpaceBetween>
        <FlexEnd pr={1}>
          <MuiButton
            onClick={handleSubmit}
            startIcon={<YoutubeSearchedForIcon />}
            variant="contained"
            cr={textPrimary}
            bg={primaryDark}
            border={primaryHover}
            sz="1.2rem"
          >
            Search
          </MuiButton>
        </FlexEnd>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

export default StatisticSearchBar;
