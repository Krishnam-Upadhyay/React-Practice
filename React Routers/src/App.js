

import "./App.css";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from "./Pages/Home";
import {Contact} from "./Pages/Contact"
import {Menu} from "./Pages/Menu"
import {Navbar} from "./Navbar";




function App(){


  return (
    <div className="App">
        <Router>
          <Navbar/>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>}/>

          </Routes>
        </Router>
       </div>
  
  )
}
export default App;


