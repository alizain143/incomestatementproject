import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Auth from "./components/Auth";



function App() {
 
  return (
    <BrowserRouter>
  
    <Routes>
      <Route element={<Auth/>}> 
          <Route path="/*" element={<Main/>} ></Route>
      </Route>
     
   
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App;
