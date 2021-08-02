import React, { Component } from 'react';
import FRInput from './FRInput';


class  FRIParent extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }

    render() { 
        return ( 
            <div>
                <FRInput ref={this.inputRef}>Children</FRInput>
                <button onClick={this.clickHandler}>Forward Input</button>
            </div>
         );
    }
}
 
export default FRIParent;