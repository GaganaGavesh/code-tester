import React from 'react';

function GlobalFilters({ filter, setFilter }){
    return(
        <span className="form-group">
            Search: {' '}
            <input
                type="text"
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </span>
    );
}

export default GlobalFilters