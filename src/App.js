import logo from './logo.svg';
import './App.css';
import Header from './components/googlekeeps/MainHeader';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { IncrementDecrement } from './components/incrementanddecrement';
import { BootstrapUse } from './components/Bootstrap';
import Footer from './components/googlekeeps/Footer';
import CreateNote from './components/googlekeeps/Createnote';
import Note from './components/googlekeeps/Notecomponent';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* < IncrementDecrement/> */}
     {/* <BootstrapUse/> */}
<CreateNote />
<div className='d-flex justify-content-between mt-5' >
<Note/>
</div>
<Footer/>
    </div>
  );
}

export default App;
