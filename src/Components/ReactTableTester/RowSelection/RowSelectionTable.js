import React, { useMemo } from "react";
import { useRowSelect, useTable } from "react-table";
import Checkbox from "./CheckBox";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS } from "../columns";
import "../table.css";

export const RowSelection = () => {
  const columns = useMemo(() => COLUMNS, []); //for prevent the recreation of the same data for every re-render
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, //this contains header groups and when it map you can get individual header group
    rows,
    prepareRow, //this prepares the row for the render
    selectedFlatRows, // gives the selected row object array (2)
    //tie the checkbox component with the table component (3)
    //programatically add a column beginning of the table (4)
    //define an arrow function as a argument , it takes all the table hooks as arguments(5)
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect, //this gives property to keep track of the selected rows (1)
    (hooks) => {
      //dan methanin column ekak gaththa column and methanin  dapu column eka aragena aluth visibleColumn set eka
      //hadala tynne, meka thama at the end render wennee
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            // Header: ({ getToggleAllRowsSelectedProps }) => (
            //   <div>
            //     <Checkbox {...getToggleAllRowsSelectedProps()} />
            //     {/* render the check box in the header 
            //         mkata dala tynne getToggleAllRowsSelectedProps nisa meken
            //         select wenawa hama row ekama*/}
            //   </div>
            // ),
            Header: '',
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                <Checkbox {...row.getToggleRowSelectedProps()} />
                {/* mekata dala tynne getToggleRowSelectedProps nisa meken select wenne eka
                    row ekai*/}
              </div>
            ),
          },
          ...columns, //render the rest of columns next
        ];
      }); //visible columns is the one defines the columns you see in the browser
    }
  );

  const firstTenRows = rows.slice(0, 10); // 10 elements from index 0

  return (
    <>
      <table bordered {...getTableProps()}>
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
          {firstTenRows.map((row) => {
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
      </table>
      <p>Length of the selected list: {selectedFlatRows.length}</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};
