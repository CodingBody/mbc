import React from "react";
import { BasixAni } from "../../styled-component/Animation";
import {
  TableContainer,
  ColumnNames,
  TableBody,
  Test,
} from "../../styled-component/Table";
import { removeLastItemInArr, removeLast } from "../../utils/Helper";
import { FlexStart } from "../../styled-component/Layout";
import { HeadThree } from "../../styled-component/Text";
import { textPrimary } from "../../styled-component/Variable";
import { v4 as uuid4 } from "uuid";

const PopupTableComponent = ({
  data,
  handleCheckBoxChange,
  columnNames,
  clLength,
  setRecords,
  selectedName,
  recordArray,
}) => {
  React.useEffect(() => {
    setRecords(recordArray);
  }, []);
  if (!data) return <div></div>;
  return (
    <BasixAni>
      <TableContainer cellspacing="0">
        <ColumnNames justify="flex-start" clLength={clLength}>
          <tr>
            <th> </th>
            {removeLastItemInArr(columnNames, clLength)}
          </tr>
        </ColumnNames>
        <Test>
          {data &&
            data.map((record) => (
              <TableBody justify="flex-start" clLength={clLength} key={uuid4()}>
                <td>
                  <input
                    defaultChecked={record[record.length - 1]}
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    onChange={(e) =>
                      handleCheckBoxChange(e, record, record[record.length - 1])
                    }
                  />
                </td>
                {removeLast(record, clLength)}
              </TableBody>
            ))}
        </Test>
      </TableContainer>
      <FlexStart bg="#eee" p={1.5}>
        <HeadThree color={textPrimary}>{selectedName}</HeadThree>
        <HeadThree color={textPrimary}>{data.length} row selected</HeadThree>
      </FlexStart>
    </BasixAni>
  );
};

export default PopupTableComponent;
