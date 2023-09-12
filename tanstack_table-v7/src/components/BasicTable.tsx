import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNs } from "./Columns";
import "./table.css";

function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
//   const columns = useMemo(() => GROUPED_COLUMNs, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default BasicTable;
