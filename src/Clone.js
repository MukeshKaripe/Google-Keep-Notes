import logo from './logo.svg';
import './App.css';
import Header from './components/googlekeeps/MainHeader';
import React, { createContext, useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { IncrementDecrement } from './components/incrementanddecrement';
import { BootstrapUse } from './components/Bootstrap';
import Footer from './components/googlekeeps/Footer';
import CreateNote from './components/googlekeeps/Createnote';
import Note from './components/googlekeeps/Notecomponent';
import ComA from './components/context/compA';
import ComC from './components/context/compC';


const FirstName =  createContext();
const LastName = createContext();
const Clone = () => {
  // provider
  // consumer

  const DeleteItem = (id) =>{
    
        // const UpdatedListe = [...addIteam];
        // UpdatedList.splice(id,1);
        setIteam((UpdatedList)=>UpdatedList.filter((current,index)=>{
            return index !== id;
          })


        );


  }
  const [addIteam,setIteam] = useState([]);
  const HowToADD=(Noteinput)=>{
// using array to show one by one easily by mapping
// alert('worked');
setIteam([...addIteam,Noteinput]);
console.log(Noteinput,'createnote');
  };
  const [numClicke,Senumclicked] = useState(0);
 const effectLICKED = ()=>{
  Senumclicked(numClicke + 1);
 }
 useEffect(()=>{
  // alert('clicked',[numClicke,]);
  document.title=`you clicked me ${numClicke} `;
 })
  return (
    <div className="App">


     <Header/>
     {/* < IncrementDecrement/> */}
     {/* <BootstrapUse/> */}
<CreateNote passNote={HowToADD}  />
<div className='d-flex justify-content-between mt-5' >
{/* <Note /> */}
{addIteam.map((val,index)=>{
  return <Note id={index} key = {index} title={val.title}
  content={val.Testnote} onselect= {DeleteItem} />
})}
</div>
<Footer/>
<FirstName.Provider value={'anil'} >
<LastName.Provider value={'ani'} >
<ComA />

</LastName.Provider>
 </FirstName.Provider >
 <button onClick={effectLICKED} >
  click me {numClicke}
 </button>
 
    </div>
  );
}

export default Clone;
export  { FirstName,LastName};

