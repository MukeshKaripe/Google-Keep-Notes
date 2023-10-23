import React from "react";

import { useState } from "react";
import Result from "./result";
import  courses  from "./dataJson";

const Search = (props) =>{
    const [data,setData] = useState("");
    const [Displaydata,setdisplayData] = useState([]);
   const InputEvents = (event) =>{
const e = event.target.value;
setData(e);
    }
    const addItems = () =>{
     if (data) {
        // setdisplayData((prevdata)=>[...prevdata,data]);
        
        setdisplayData([...Displaydata,data])
        // setdisplayData((prev)=>[prev.push(data)]);
        setData('');
     }

        console.log(Displaydata);
        // setData('');

        // console.log(data,"data")
        // array1.push(Displaydata);
    }
    // console.log("array1",array1);

   
      const getName = courses.map((courses)=>
      <li key={courses.id}>
        <span > {courses.name} </span>
        <p> {courses.price} </p>
      </li>);
      
    return(
        <>
        
        <input type="text" placeholder="search" value={data}  onChange={InputEvents}/>
        <button onClick={addItems}>send</button>
        <ul>
        
          {Displaydata.map((item,index)=>
<li key={index}>
  {index + 1}.
    {item}

</li>
          )}
         
        </ul>
    {data === " "?   null :   <Result value={data}/>}
        {/* <ul>
            {getName}
        </ul> */}
        
        </>
    )
}
export default Search;
// import React from "react";

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: "",
//       items: [],
//     };
//   }

//   inputEvents = (event) => {
//     const e = event.target.value;
//     this.setState((prevState) => ({
//       ...prevState,
//       data: e,
//     }));
//   };

//   addItems = () => {
//     this.setState((prevState) => ({
//       ...prevState,
//       items: [...prevState.items, prevState.data],
//       data: "",
//     }));
//   };

//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           placeholder="search"
//           value={this.state.data}
//           onChange={this.inputEvents}
//         />
//         <button onClick={this.addItems}>send</button>
//         <ul>
//           {this.state.items.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default Search;