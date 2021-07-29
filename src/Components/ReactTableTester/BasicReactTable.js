import React, { useMemo } from 'react'
import { useTable } from "react-table";
import { Table } from 'reactstrap';
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
//import './table.css'

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);//for prevent the recreation of the same data for every re-render
    const data = useMemo(() => MOCK_DATA, []);
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,//this contains header groups and when it map you can get individual header group
      footerGroups,//same as the headerGroups
      rows,
      prepareRow//this prepares the row for the render
    } = useTable({
      columns,
      data
    })
  
    return (
      <>
        <Table bordered {...getTableProps()}>
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
            {rows.map(row => {
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
          <tfoot>
            {footerGroups.map(footerGroup => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                  <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </Table>
      </>
    )
  }