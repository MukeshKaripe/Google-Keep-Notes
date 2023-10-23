import React, { createContext, useState } from 'react';
import { FirstName, LastName } from '../../App';


const ComC = () =>{

    return (
        <>
  
    <FirstName.Consumer>

        {(fname)=>{
            return (
                <LastName.Consumer>
                {
                    (endUs)=>{
                        return (<><a> context working and learning {fname} </a><h2> ok {endUs} </h2> </>)
                    }
                }
                        </LastName.Consumer>

            )

        }}
    </FirstName.Consumer>
    {/* <a> context working and learning </a> */}
    </>)
}
export default ComC;