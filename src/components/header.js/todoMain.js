import { useState } from "react";
import { TodoList } from "./Todolist";

const Header = () =>{
    const [Add,setValue ]= useState("");
    // array to store items
    const [Items,setItems]= useState([]);

//   let AddValue =""; 
   const valueData=(event) =>{
    console.log(event.target.value);
    //    AddValue = event.target.value;
    setValue(event.target.value);

   };

   const listEvents= ()=>{
    // setValue(AddValue);
// setItems((oldItems)=>{
//     return [...oldItems , Add];
// });
setItems([...Items,Add]);
setValue('');

   };
//    eassy way of getting id
   const delteItem = (id) => {
    console.log('delete');
    const updatedItems = [...Items];
    updatedItems.splice(id,1);
    setItems(updatedItems)
// setItems((olditems)=>{
//     return olditems.filter((arrCurrentElement, index)=>{
// return index !== id;
//     })
// })
   };
    return(
        <div className="main-div" > 
        <h1>ToDo List</h1>

        <div className="form-field" >
        <input type="text"placeholder="add items" onChange={valueData} value={Add} ></input>
        <button onClick={listEvents} >ADD+ </button>
        </div>
    <ol>

        {/* <li>
        
            worked
        </li> */}
        {/* <li>    {Add}</li> */}
        {/* <li>
            {Items}
        </li> */}
        {/* to get array of elemts in order */}
        {Items.map((item,index)=>{
          return  <TodoList id={index} key={index} text={item} onSelect={delteItem} />
        })}
    </ol>
        </div>

    )
;
}
export default Header;