import Button from '@mui/material/Button';
import { Title } from 'chart.js';
import { useState } from 'react';
// import AddIcon from '@mui/icons-material/AddIcon';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai';
import Note from './Notecomponent';

const CreateNote = (props)=>{
    const [Noteinput,setInput] = useState(
        {
            title:'',
            Testnote:'',

        }
    );
    const [expand , setExpand] = useState(false);
    const InputEvents = (event) => {
        console.log(event);
        // const value = event.target.value;
        // const name = event.target.name;
        // simple by using es6 module object destructuring

        const {name,value}= event.target;

        setInput((pevData)=>{
            return{
                ...pevData,
                [name] : value,


            }
        });
        console.log(Noteinput);
    }
  const  setNoteData = () =>{
props.passNote(Noteinput);
// setItems([...items,Noteinput]);
setInput({
    title:'',
    Testnote:'',
});


  }
  const FirstExpanNote =()=>{
    setExpand(!expand);
  }
//   const SecondSetExapand =()=>{
//     setExpand(false);

//   }
     

    return(

        <>
        <div className="main-note w-50 m-auto " >
            <form className='d-flex flex-column ' >
          {  expand ? <input type="text" placeholder='title' name='title'  onChange={InputEvents} value={Noteinput.title}  >

                </input>:null}
                <textarea row="" column='' placeholder="write a note.." name='Testnote' onChange={InputEvents} value={Noteinput.Testnote} onClick={FirstExpanNote} /*onDoubleClick={SecondSetExapand}*/ >

      

                </textarea>
            <Button variant="text" onClick={setNoteData} > <AiOutlinePlus/> </Button>

            </form>
          

        </div>
        </>

    )
}

export default CreateNote;
