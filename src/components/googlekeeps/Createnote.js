import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/AddIcon';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'
const CreateNote = ()=>{

    return(

        <>
        <div className="main-note w-50 m-auto " >
            <form className='d-flex flex-column ' >
                <input type="text" placeholder='title' >

                </input>
                <textarea row="" column='' placeholder="write a note.." >

                    { }

                </textarea>
            <Button variant="text"> <AiOutlinePlus/> </Button>
            <Button variant="text" > <AiOutlineClose/> </Button>

            </form>

        </div>
        </>

    )
}

export default CreateNote;
