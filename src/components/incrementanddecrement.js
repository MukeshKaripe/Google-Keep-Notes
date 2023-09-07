import React, { useState } from 'react';

export const IncrementDecrement =() =>{
    const [value,SetValue] = useState(0);
    const Increment=()=>{
        SetValue(value + 1)
    }
    const Dcrement=()=>{
        if(value > 0)
{
    SetValue(value - 1);
}
else{
    window.alert('its is zero')
}
    }
    return(
<>
<div  className='main-container' >
    <div className='indicator' >
{value }
    </div>
    <div>
        <button onClick={Increment} >Incre</button>
        <button onClick={Dcrement} >Decre</button>
    </div>
</div>
</>

    )

}
