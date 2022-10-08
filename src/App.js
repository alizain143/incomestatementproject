import { BrowserRouter,Navigate,Route,Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";



function App() {
 
  return (
    <BrowserRouter>
  
    <Routes>
    
     
   {localStorage.getItem("token")? <Route path="/*" element={<Main/>}></Route>: ""}
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App;
