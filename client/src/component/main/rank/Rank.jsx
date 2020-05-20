import React from "react";
import SubHeader from "./../../header/SubHeader";
import { SpaceAround } from "../../../styled-component/Layout";
import PieChartStatistics from "./../../pieChart/PieChartStatistics";
import { connect } from "react-redux";

const Rank = ({ category, records }) => {
  return (
    <React.Fragment>
      <SubHeader category={category} />
      <SpaceAround>
        <PieChartStatistics
          records={records}
          category={category}
          title="VOD Rank"
        />
        <PieChartStatistics
          records={records}
          category={category}
          title="VOD Rank"
        />
        <PieChartStatistics
          records={records}
          category={category}
          title="VOD Rank"
        />
      </SpaceAround>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  records: state.main.rankRecord,
});

export default connect(mapStateToProps)(Rank);
