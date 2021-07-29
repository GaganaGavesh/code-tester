import { format } from 'date-fns';
import ColumnFilter from './Filtering/ColumnFIltering';

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    //Filter: ColumnFilter,//render the CloumnFilter for everytime 
    // when it calls column.render('Filter')
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
    //Filter: ColumnFilter,
    sticky: 'left'
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
    //Filter: ColumnFilter,
    sticky: 'left'
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor: 'date_of_birth',
    //Filter: ColumnFilter,
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Country',
    Footer: 'Country',
    //Filter: ColumnFilter,
    accessor: 'country'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    //Filter: ColumnFilter,
    accessor: 'phone'
  },
  {
    Header: 'Email',
    Footer: 'Email',
    //Filter: ColumnFilter,
    accessor: 'email'
  },
  {
    Header: 'Age',
    Footer: 'Age',
    //Filter: ColumnFilter,
    accessor: 'age'
  },
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [//methana danne ape headerGroup ekata adala wena column tika
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
]