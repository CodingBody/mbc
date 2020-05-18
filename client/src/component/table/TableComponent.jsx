import React from "react";
import { BasixAni } from "../../styled-component/Animation";
import {
  TableContainer,
  ColumnNames,
  TableBody,
} from "../../styled-component/Table";
import { removeLastItemInArr, removeLast } from "../../utils/Helper";
import { FlexStartWithBorder, FlexCenter } from "../../styled-component/Layout";
import { HeadThree } from "../../styled-component/Text";
import { Box } from "@material-ui/core";
import { MuiButton } from "../../styled-component/Button";
import { CheckBoxIco } from "../../styled-component/Button";
import {
  primaryDark,
  primaryHover,
  disabled,
  textPrimary,
} from "../../styled-component/Variable";
import HeaderMunu from "./../header/HeaderMenu";
import EditIcon from "@material-ui/icons/Edit";
import styled from "styled-components";
import { v4 as uuid4 } from "uuid";

const SdEditIcon = styled(EditIcon)`
  cursor: pointer;
`;

const TableComponent = ({
  data,
  columnNames,
  clLength,
  handleEditClick,
  columns,
  onClickColumn,
}) => {
  return (
    <BasixAni>
      <TableContainer cellspacing="0">
        <ColumnNames clLength={clLength}>
          <tr>
            <th>
              <HeaderMunu />
            </th>
            {removeLastItemInArr(columnNames, clLength)}
          </tr>
        </ColumnNames>
        <tbody>
          {data &&
            data.map((record) => (
              <TableBody
                br={`1px solid ${primaryHover}`}
                clLength={clLength}
                key={uuid4()}
              >
                <td>
                  <SdEditIcon
                    onClick={() => handleEditClick(record, columnNames)}
                  />
                </td>
                {removeLast(record, clLength)}
              </TableBody>
            ))}
        </tbody>
      </TableContainer>
      <FlexStartWithBorder p={1.5}>
        <HeadThree color={textPrimary}>{data.length} row selected</HeadThree>
        <FlexCenter ml={5}>
          {columns.map((item) => (
            <Box key={item.id} mx={1}>
              <MuiButton
                endIcon={<CheckBoxIco cr={item.fetch ? null : `${disabled}`} />}
                variant="contained"
                cr={item.fetch ? textPrimary : `${disabled}`}
                bg={primaryDark}
                border={primaryHover}
                onClick={() => onClickColumn(item)}
                sz="1.1rem"
              >
                {item.name}
              </MuiButton>
            </Box>
          ))}
        </FlexCenter>
      </FlexStartWithBorder>
    </BasixAni>
  );
};

export default TableComponent;
