import ComponentC from "./ComponentC.jsx";
import React, { useContext } from 'react';

function ComponentB(){

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    );

}

export default ComponentB