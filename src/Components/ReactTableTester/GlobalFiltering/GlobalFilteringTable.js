import React, { useMemo } from "react";
import { useGlobalFilter, useTable } from "react-table";
import { Table } from "reactstrap";
import GlobalFilters from "./GlobalFilter";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS } from "../columns";
import '../table.css'

export const GlobalFilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []); //for prevent the recreation of the same data for every re-render
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, //this contains header groups and when it map you can get individual header group
    footerGroups, //same as the headerGroups
    rows,
    state,
    setGlobalFilter,
    prepareRow, //this prepares the row for the render
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globalFilter } = state;
  const tableType = "table"; // Table or table

  const tableCOntent = () => {
    return (
      <>
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
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                  // Methana cell walata watenne uda column wala specify karapu data witharai
                  //eka row eken eka thama data gahanne td tag walata.
                  //meka utility ekak, additional tag DOM ekata render karanne ne
                  //table data manipulation ekata and representaton ekata help karanawa witharai
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps}>{column.render("Footer")}</td>
                // Methana Footer kiyanne column object array eke tyna Footer kiyana
                //key ekata adala value eka
              ))}
            </tr>
          ))}
        </tfoot>
      </>
    );
  };
  return (
    <>
      <GlobalFilters filter={globalFilter} setFilter={setGlobalFilter} />
      {tableType === "Table" ? (
        <Table bordered {...getTableProps()}>
          {tableCOntent()}
        </Table>
      ) : (
        <table bordered {...getTableProps()}>
          {tableCOntent()}
        </table>
      )}
    </>
  );
};
