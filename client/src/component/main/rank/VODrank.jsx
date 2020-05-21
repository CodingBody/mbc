import React from "react";
import { SpaceBetween } from "../../../styled-component/Layout";
import { HeadTwo } from "../../../styled-component/Text";
import { textPrimary } from "../../../styled-component/Variable";
import { Paper } from "@material-ui/core/";
import PieChart from "../../chart/PieChart";
import { fetchRecordStart } from "../../../redux/main/actions";
import { connect } from "react-redux";
import SearchBar from "../../searchBar/StatisticSearchBar";
import StaticTableComponent from "../../table/StaticTableComponent";
import { format, subMonths } from "date-fns";
import BarChart from "../../chart/BarChart";
import LineChart from "../../chart/LineChart";

const PieChartStatistics = ({
  title,
  render,
  fetchRecordStart,
  category,
  records,
}) => {
  const [startDate, setStartDate] = React.useState(subMonths(new Date(), 1));
  const [endDate, setEndDate] = React.useState(new Date());
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = ({ start, end }) => {
    const startDate = format(start, "yyyy-MM-dd");
    const endDate = format(end, "yyyy-MM-dd");

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
        {render === "line" ? (
          <LineChart records={records} />
        ) : render === "bar" ? (
          <BarChart records={records} />
        ) : (
          <PieChart records={records} />
        )}
      </Paper>
    </React.Fragment>
  );
};

export default connect(null, { fetchRecordStart })(PieChartStatistics);
