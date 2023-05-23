import React from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { Link, Route, Routes } from "react-router-dom";
class App extends React.Component{
render(){
  return(
    <div>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link>  |{" "}
        <Link to="/contact">Contact</Link>  |{" "}
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
   </div>
  )
}
  }
export default App;