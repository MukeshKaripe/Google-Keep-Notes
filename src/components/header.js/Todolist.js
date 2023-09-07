import React from "react";
import {LiaCrossSolid, LiaCrosshairsSolid} from 'react-icons/lia';
import {RxCross1} from 'react-icons/rx';


export const TodoList=(props)=>{

  return(
<>
 <li>
  <div className="image-talk" ><RxCross1 onClick={()=>{
    props.onSelect(props.id)
  }} />
  {props.text}</div>
 </li></>
  )
}
