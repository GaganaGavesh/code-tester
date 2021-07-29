import React from 'react';

function ColumnFilter({ column }){
    const { filterValue, setFilter } = column;
    return(
        <span className="form-group">
            Search: {' '}
            <input
                type="text"
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
            {filterValue && <label onClick={()=>{setFilter('')}}>❌</label>}
        </span>
    );
}

export default ColumnFilter;