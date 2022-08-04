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
import UpdateGallery from './Pages/Gallery/UpdateGallery';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UserContact from './Pages/Contact/UserContact';
import AdminContact from './Pages/Contact/AdminContact';
import AdminNotice from './Pages/Notice/AdminNotice';
import AddNotice from './Pages/Notice/AddNotice';
import UpdateNotice from './Pages/Notice/UpdateNotice';
import Admission from './Pages/Services/Admission';

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
        <Route path="addnotice" element={<AddNotice></AddNotice>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
        <Route path="admingallery" element={<AdminGallery></AdminGallery>}></Route>
        <Route path="adminnotice" element={<AdminNotice></AdminNotice>}></Route>
        <Route path="singleadmingallery" element={<SingleAdminGallery></SingleAdminGallery>}></Route>
        <Route path="addgallery" element={<AddGallery></AddGallery>}></Route>
        <Route path="admission" element={<Admission></Admission>}></Route>
        <Route path="usercontact" element={<UserContact></UserContact>}></Route>
        <Route path="admincontact" element={<AdminContact></AdminContact>}></Route>
        <Route path="/updategallery/:id" element={<UpdateGallery></UpdateGallery>}></Route>
        <Route path="/updatenotice/:id" element={<UpdateNotice></UpdateNotice>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
