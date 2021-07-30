import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import ModalExample from "./ManageColumnsModal";
import { COLUMNS } from "../columns";
import "../table.css";
import Checkbox from "../RowSelection/CheckBox";

export const ManageColumns = () => {
  const columns = useMemo(() => COLUMNS, []); //for prevent the recreation of the same data for every re-render
  const data = useMemo(() => MOCK_DATA, []);
  const [toggleModal, setToggleModal] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups, //this contains header groups and when it map you can get individual header group
    footerGroups, //same as the headerGroups
    rows,
    prepareRow, //this prepares the row for the render
    allColumns, //array of all columns supplied from the useTable instance
    getToggleHideAllColumnsProps, //method lets you hide and show columns at once
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      <button onClick={() => setToggleModal(!toggleModal)}>
        Manage Columns
      </button>
      {toggleModal && (
        <ModalExample
          setToggleModal={setToggleModal}
          allColumns={allColumns}
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
        />
      )}
      <div>
        {/* <div> */}
          {/* me checkBox eka danne indeterminate state ekak tyenna pluwn nisa
                e kiyanne meka select wela tyeeddi unath apita anith column toggle karanna pluwan
                e kiyanne Toggle All check wela tyna welawe hama column hama ekama nothibenna pluwn
                But anith check box wala ekema scene ekak ne, e nisa kelinma native checkBox ekama danna pluwn */}
          {/* <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div> */}
        {/* <div>
          {allColumns.map((column) => (
            <div key={column.accessor}>
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </div>
          ))}
        </div> */}
      </div>

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
      </table>
    </>
  );
};
