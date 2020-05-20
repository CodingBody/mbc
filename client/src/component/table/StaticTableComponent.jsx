import React from "react";
import {
  TableContainer,
  TableBody,
  ColumnNames,
} from "./../../styled-component/Table";
import { v4 as uuid4 } from "uuid";
import { FlexStartWithBorder } from "../../styled-component/Layout";
import { primaryHover } from "../../styled-component/Variable";
import { Box } from "@material-ui/core";
const StaticTableComponent = ({ records }) => {
  return (
    <React.Fragment>
      <Box mb={2} p={1}>
        <TableContainer cellspacing="0">
          <ColumnNames clLength={3}>
            <tr>
              <th>Content</th>
              <th>Count</th>
              <th>Last Watch</th>
            </tr>
          </ColumnNames>
          <tbody>
            {records &&
              records.map((record) => (
                <TableBody
                  br={`1px solid ${primaryHover}`}
                  clLength={3}
                  key={uuid4()}
                >
                  <td>{record.TITLE}</td>
                  <td>{record.COUNT}</td>
                  <td>{record.LAST_WATCH}</td>
                </TableBody>
              ))}
          </tbody>
        </TableContainer>
        <FlexStartWithBorder p={1.5}>test</FlexStartWithBorder>
      </Box>
    </React.Fragment>
  );
};

export default StaticTableComponent;
