import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS } from "../columns";
import "../table.css";

//STEPS
//1. import usePagination hook
//2. pass it to the useTable hook
//3. destructure page instead of rows, we render the individual page rows in this case
//4. destructure nextPage and previouspage from useTable instance
//5. destructure canNextPAge and canPreviousPage from useTable instance
//6. get the state and destructure it to get the page numbers, pageOptions array
//7. go to last page , pageCount, gotoPage function
//8. Adding input field to go preferred page
//9. destructure the setPageSize from the use table instance and destructure pageSize from state

const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []); //for prevent the recreation of the same data for every re-render
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, //this contains header groups and when it map you can get individual header group
    //rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    pageCount,
    gotoPage,
    setPageSize,
    prepareRow, //this prepares the row for the render
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, //this is an object that helps to initial state of the page
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

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
          {/* Put the page instead of rows, we map rows from the current page instead, 
                default page size is 10 */}
          {page.map((row) => {
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
      <div className="container pagination">
        <span className="footerContent">
          Page:{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span className="footerContent">
          | Go to page:{" "}
          <input
            type="number"
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) : 0;
              gotoPage(pageNumber - 1);
            }}
            value={pageIndex + 1}
            style={{ width: "50px" }}
          />
        </span>
        <select
          className="footerContent"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button
          className="btn btn-success"
          disabled={!canPreviousPage}
          onClick={() => {
            gotoPage(0);
          }}
        >
          {"<<"}
        </button>
        <button
          className="btn btn-success"
          disabled={!canPreviousPage}
          onClick={() => {
            previousPage();
          }}
        >
          Previous Page
        </button>

        <button
          className="btn btn-success"
          disabled={!canNextPage}
          onClick={() => {
            nextPage();
          }}
        >
          Next Page
        </button>
        <button
          className="btn btn-success"
          disabled={!canNextPage}
          onClick={() => {
            gotoPage(pageCount - 1);
          }}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default PaginationTable;
