import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Register/Login';
import Services from './Pages/Services/Services';
import Footer from './Pages/Footer/Footer';
import Enrollment from './Pages/Services/Enrollment';
import Notice from './Pages/Notice/Notice';
import Gallery from "./Pages/Gallery/Gallery"
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="notice" element={<Notice></Notice>}></Route>
        <Route path="gallery" element={<Gallery></Gallery>}></Route>
        <Route path="enrollment" element={<Enrollment></Enrollment>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
