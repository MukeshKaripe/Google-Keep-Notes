import { Route, Routes, useLocation, useParams  } from "react-router-dom";

const Users=({match})=>{
    const {name }= useParams();
    const locationN =useLocation();
    // console.log( locationN);

    return(
        <>
       <h2>
       Routes {name}
       </h2>
       <p>my current location {locationN.pathname}</p>
       {locationN.pathname === `/contact/anil` ?
       (<button>
        got
       </button>):null}
        </>
    )
}
export {Users};