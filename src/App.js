import "./App.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Contacts } from "./Pages/Contacts";
import { Profile } from "./Pages/Profile";
import { Navbar } from "./Pages/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";






function App() {
  
  const client = new QueryClient();

  
  return (
    <div className="App">
      <QueryClientProvider client={client} >
      <Router>
          <Navbar/>
           <Routes>
          <Route path="/" element={<Home ></Home>} ></Route>
          <Route path="/profile" element={<Profile ></Profile>} ></Route>
          <Route path="/contacts" element={<Contacts></Contacts>} ></Route>
          <Route path="*" element={<h1>Page not Found</h1>} ></Route>

        </Routes>
      </Router>
      </QueryClientProvider>
    
    </div>
  );
}

export default App;