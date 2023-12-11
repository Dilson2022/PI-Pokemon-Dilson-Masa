//import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Landing, Home, Form, Detail } from "./views"
import { Route, Routes, useLocation } from "react-router-dom";


function App() {
const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/create" element={<Form/>}/>
      <Route path="/home" element={<Home/>} />
      </Routes>

    </div>
    );
  }
  export default App;
      
      
    

       
     


