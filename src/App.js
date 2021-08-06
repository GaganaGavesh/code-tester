import "./App.css";
import React from "react";
// import MainAppForProtectedRoute from './Components/MainAppForProtectedRoute';
//import Example from './Components/ReactStrapTesterComponents/TabContent';
// import Example from './Components/ReactStrapTester/ProgressBar';
// import FormsExample from './Components/ReactFormTester/Forms';
//import TableTester from './Components/ReactTableTester/ReactTable';
import { BasicTable } from "./Components/ReactTableTester/BasicReactTable";
import FRIParent from "./Components/FowardRefTester/FRIParent";
import { GlobalFilteringTable } from "./Components/ReactTableTester/Filtering/GlobalFilteringTable";
import { ManageColumns } from './Components/ReactTableTester/ManageColumns/ManageCOlumnTable';
import PaginationTable from './Components/ReactTableTester/Pagination/PaginatedTable';
import { RowSelection } from './Components/ReactTableTester/RowSelection/RowSelectionTable';
import { SortTable } from "./Components/ReactTableTester/SortByTable";

function App() {
  return (
    // <MainAppForProtectedRoute/>
    // <Example/>
    // <FormsExample/>
    // <TableTester/>
    //<BasicTable/>
    //<SortTable/>
    //<GlobalFilteringTable />
    //<PaginationTable/>
    //<RowSelection/>
    //<ManageColumns/>
    <FRIParent/>
  );
}

export default App;
