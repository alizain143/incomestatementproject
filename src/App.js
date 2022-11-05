import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path="/*" element={<Main />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
