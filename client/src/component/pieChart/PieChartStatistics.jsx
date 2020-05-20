import React from "react";
import { SpaceBetween } from "../../styled-component/Layout";
import { HeadTwo } from "../../styled-component/Text";
import { textPrimary } from "../../styled-component/Variable";
import { Paper } from "@material-ui/core/";
import PieChart from "./PieChart";
import { fetchRecordStart } from "./../../redux/main/actions";
import { connect } from "react-redux";
import SearchBar from "./../searchBar/StatisticSearchBar";
import StaticTableComponent from "./../table/StaticTableComponent";

const PieChartStatistics = ({ title, fetchRecordStart, category, records }) => {
  const [startDate, setStartDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [endDate, setEndDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = () => {
    fetchRecordStart({ startDate, endDate, category });
  };

  return (
    <React.Fragment>
      <Paper>
        <SpaceBetween
          borderColor="secondary.main"
          borderBottom={2}
          color={textPrimary}
          mb={3}
          py={1}
          px={2}
        >
          <HeadTwo sz="1.4rem">{title}</HeadTwo>
        </SpaceBetween>
        <SearchBar
          startDate={startDate}
          endDate={endDate}
          handleEndDateChange={handleEndDateChange}
          handleStartDateChange={handleStartDateChange}
          handleSubmit={handleSubmit}
        />
        <StaticTableComponent records={records} />

        <PieChart />
      </Paper>
    </React.Fragment>
  );
};

export default connect(null, { fetchRecordStart })(PieChartStatistics);
