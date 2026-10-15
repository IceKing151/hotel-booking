import "./App.css";
// import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Home3 from "../components/Home3";
import Rooms from "../components/Rooms";
import RoomInfo from "../components/RoomInfo";
import Bookings from "../components/Bookings";
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        

      <Routes>
        <Route path="/" element={< Home3/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomInfo" element={<RoomInfo />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
