import React from 'react';

//React.forwardRef takes component as a parameter
//When Aa component is passed to forwardRef method 
//it receives ref as second parameter
const FRInput = React.forwardRef((props, ref) => {
    console.log('Ref :', ref.current.children)
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
      );
})
 
export default FRInput;