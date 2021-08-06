import React, { useMemo } from 'react'
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

function TableTester() {
  //  const data = React.useMemo(
  //    () => [
  //      {
  //        col1: 'Hello',
  //        col2: 'World',
  //      },
  //      {
  //        col1: 'react-table',
  //        col2: 'rocks',
  //      },
  //      {
  //        col1: 'whatever',
  //        col2: 'you want',
  //      },
  //    ],
  //    []
  //  )

  //  const columns = React.useMemo(
  //    () => [
  //      {
  //        Header: 'Column 1',
  //        accessor: 'col1', // accessor is the "key" in the data
  //      },
  //      {
  //        Header: 'Column 2',
  //        accessor: 'col2',
  //      },
  //    ],
  //    []
  //  )
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )
  return (
    <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
  );
}

export default TableTester;
