import logo from './logo.svg';
import './App.css';
import Header from './components/googlekeeps/MainHeader';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { IncrementDecrement } from './components/incrementanddecrement';
import { BootstrapUse } from './components/Bootstrap';
import Footer from './components/googlekeeps/Footer';
import CreateNote from './components/googlekeeps/Createnote';
import Note from './components/googlekeeps/Notecomponent';

function App() {
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
    </div>
  );
}

export default App;
