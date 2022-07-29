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
import AdminGallery from './Pages/Gallery/AdminGallery';
import SingleAdminGallery from './Pages/Gallery/SingleAdminGallery';
import AddGallery from './Pages/Gallery/AddGallery';
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
        <Route path="admingallery" element={<AdminGallery></AdminGallery>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
        <Route path="singleadmingallery" element={<SingleAdminGallery></SingleAdminGallery>}></Route>
        <Route path="addgallery" element={<AddGallery></AddGallery>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
