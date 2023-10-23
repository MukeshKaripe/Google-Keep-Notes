import { useEffect } from "react";
import Statewise from "./components/stateData/countrywiseData";
import { Route, Routes, useParams  } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Home from "./components/home";
import React from "react";
import ReactDOM from "react-dom";
import { Users } from "./components/user";
import Search from "./components/search";
import Result from "./components/result";

const App = () =>{
//   const  getCovidData = async ()=>{

// fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
//   }
// to call api using function 
// we need for now is useEffect
// useEffect(()=>{
// getCovidData();
// },[]);
useParams();
const Name = ()=>{
  return (<>
  <h1>
    Name page is working
  </h1>
  </>)
}
    return (
        <>
        <Menu/>
        {/* <About/> */}
        {/* <Contact/> */}
        <Routes>
          <Route exact path="/" Component={About} />
          <Route exact path="/contact" Component={()=>
            
              <Contact name="contacts" /> 
           
          } />
           {/* <Route path="/homecc" render={() => <div>Home</div>} /> */}
          <Route path="/*" Component={Error} />
            
          {/* <Route path="/contact/name" Component={Name} /> */}
          <Route path="/home" Component={Home} />
          <Route path="/contact/:name" Component={Users} />
          <Route path="/search" Component={Search} />

        </Routes>
        <Statewise/>
        <Result></Result>
        
        <kbd> jewhjahjkjd</kbd>
        </>
    )
}
export default App;
