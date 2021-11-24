
import './App.css';


import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {Routes, Route} from "react-router-dom"
import NavBar from './component/NavBar';


function App() {
  return (
    <>
    <div className="App">
    <NavBar/>
    <Routes>
     <Route exact  path="/"  element={<Home />}/>
     <Route exact  path="/about"  element={<About />}/>
     <Route  path="contact"  element ={<Contact/>}/>
     </Routes>
     </div>
    </>
  );
}

export default App;
