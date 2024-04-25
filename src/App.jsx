import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { MernStack, AllUsers, AddUser } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MernStack />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/addusers" element={<AddUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
