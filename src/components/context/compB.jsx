import React, { createContext, useContext, useState } from 'react';

import ComC from "./compC";
import { FirstName, LastName } from '../../App';

const ComB = () =>{
    const context = useContext(FirstName);
    const lsastName = useContext(LastName );



    return (
        <>
        <a> IT WILL WORK WITH USEcONTEXT {context} {lsastName} </a>
        </>
    )
}
export default ComB;