//import './App.css';
import {Landing, Home, Form, Detail } from "./views"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={Landing}/>
      <Route path="/detail" element={Detail}/>
      <Route path="/form" element={Form}/>
      <Route path="/home" element={Home} />
      </Routes>

    </div>
    );
  }
  export default App;
      
      
    

       
     


