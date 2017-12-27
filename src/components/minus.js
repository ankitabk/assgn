import React, {Component} from 'react';

const Minus = (props) => {
        return (
            <div>
                <button onClick={()=>{props.dess()}} className="button button5" >- </button>
            </div>
        );

}
export default Minus;