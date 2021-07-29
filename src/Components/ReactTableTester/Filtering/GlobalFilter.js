import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

function GlobalFilters({ filter, setFilter }){
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce((value) =>{
        setFilter(value || undefined)
    }, 800);//1sec gyama thama full text ekatama adala data tika load karanne
    //immediately hama key stroke ekakatama table eka filter karanna gyama 
    //lokuuu table ekak nam perfofmance aulak enawa delay ekak enawa sampurna 
    //filter string eke every character ekatama filter karanna yana nisa
    return(
        <span className="form-group">
            Search: {' '}
            <input
                type="text"
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }}
            />
            <button onClick={()=>{setFilter('')}}>Clear Filters</button>
        </span>
    );
}

export default GlobalFilters