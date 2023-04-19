import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Deshboard/Deshboard";
import People from "./components/Sidebar/People";
import AddPeople from "./components/Sidebar/AddPeople";
import GlobalContext from "./components/GlobalContext/GlobalContext";
import Protected from "./components/Protected/Protected";
import Public from "./components/PublicRoute/Public";
import Signup from "./SignUp/Signup";

function App(props) {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route element={<Public />}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Route>
          <Route element={<Protected />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/people" element={<People />} />
            <Route exact path="/addPeople" element={<AddPeople />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
