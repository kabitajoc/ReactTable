import React from "react";
import { useMemo } from "react";
import { useTable ,usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNs } from "./Columns";
import "./table.css";

function PaginationTable() {
  const columns = useMemo(() => COLUMNS, []);
  //   const columns = useMemo(() => GROUPED_COLUMNs, []);
  const data = useMemo(() => MOCK_DATA, []);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    page,
    nextPage,
    previousPage
    prepareRow,
  } = useTable({
    columns,
    data,
  },usePagination);

  return (
    <>
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
        {page.map((row) => {
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
    </table>
    <div>
        <button onClick={()=>previousPage()}>Previous</button>
        <button onClick={()=>nextPage()}>Next</button>
    </div>
    </>
  );
}

export default PaginationTable;
