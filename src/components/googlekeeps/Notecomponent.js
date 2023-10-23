import Button from '@mui/material/Button';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'


const Note = (props)=>{
   const DeleteItem = ()=>{
    props.onselect(props.id);
   }
return(
    <>
    <div className="note" >
        <h1>
       {props.title}
        </h1>
        <p>{props.content}</p>
        <Button onClick={DeleteItem} > <AiOutlineClose/> </Button>

    </div>

    </>
)
}

export default Note;
