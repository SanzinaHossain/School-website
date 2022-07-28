import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Register/Login';
import Services from './Pages/Services/Services';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
