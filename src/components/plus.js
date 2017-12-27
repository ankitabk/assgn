import React, {Component}from 'react';

const Plus = (props) => {


        return (
            <div>
                <button onClick={()=>{props.incc()}}  className="button button5" >+ </button>
            </div>
        );

}
export default Plus;