import './App.css';
import { Routes , Route } from 'react-router-dom'; 

import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Banner from './BannerComponent/Banner';
import Footer from './FooterComponent/Footer';
import Content from './ContentComponent/Content';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Logout from './LogoutComponent/Logout';
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import CPAdmin from './CPAdminComponent/CPAdmin';
import EPAdmin from './EPAdminComponent/EPAdmin';
import AddCategory from './AddCategoryComponent/AddCategory';
import AddSubCategory from './AddSubCategoryComponent/AddSubCategory';
import Userhome from './UserhomeComponent/Userhome';
import APUser from './APUserComponent/APUser';
import ViewCategory from './ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './ViewSubCategoryComponent/ViewSubCategory';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import ViewProduct from './ViewProductComponent/ViewProduct';
import BidProduct from './BidProductComponent/BidProduct';
import ShowBid from './ShowBidComponent/ShowBid';

function App() {
  return (
    <div>

    <Header />

    <Nav />

    <Banner />  

    <Routes>
    <Route path="/" element={<Content />} ></Route>
    <Route path="/about" element={<About />} ></Route>
    <Route path="/contact" element={<Contact />} ></Route>
    <Route path="/service" element={<Service />} ></Route>
    <Route path="/register" element={<Register />} ></Route>
    <Route path="/verifyuser/:vemail" element={<Verifyuser />} ></Route>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/logout" element={<Logout />} ></Route>
    <Route path="/admin" element={<Adminhome />} ></Route>
    <Route path="/manageusers" element={<Manageusers />} ></Route>
    <Route path="/cpadmin" element={<CPAdmin />} ></Route>
    <Route path="/epadmin" element={<EPAdmin />} ></Route>
    <Route path="/addcategory" element={<AddCategory />} ></Route>
    <Route path="/addsubcategory" element={<AddSubCategory />} ></Route>
    <Route path="/user" element={<Userhome />} ></Route>
    <Route path="/apuser" element={<APUser />} ></Route>
    <Route path="/viewcategory" element={<ViewCategory />} ></Route>
    <Route path="/viewsubcategory/:catnm" element={<ViewSubCategory />} ></Route>
    <Route path="/viewproduct/:catnm/:subcatnm" element={<ViewProduct />} ></Route>
    <Route path="/bidproduct/:pid" element={<BidProduct />} ></Route>
    <Route path="/showbid/:pid" element={<ShowBid />} ></Route>
    </Routes>    
    
    {/* Footer Start */}
    
    <Footer />
    
    <div class="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
        <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="py-4 px-5 text-center text-md-start">
                <p class="mb-0">&copy; <a class="text-primary" href="#">eAuction</a>. All Rights Reserved.</p>
            </div>
            <div class="py-4 px-5 bg-primary footer-shape position-relative text-center text-md-end">
                <p class="mb-0">Designed by <a class="text-dark" href="">Danish</a></p>
            </div>
        </div>
    </div>
    {/* Footer End */}


    {/* Back to Top */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
  );
}

export default App;
