import './Header.css';
import { useState , useEffect } from 'react';
import Auth from '../AuthComponent/Auth';

function Header() {

 const [ HeaderContent , setHeaderContent ] = useState();    

 useEffect(()=>{
    if(localStorage.getItem("role")=="admin")
    {
        setHeaderContent(<div>
            {/* Topbar Start */}
            <div class="container-fluid px-5 d-none d-lg-block">
            <div class="row gx-5">
                <div class="col-lg-4 text-center py-3">
                    
                </div>
                <div class="col-lg-4 text-center border-start border-end py-3">
                    
                </div>
                <div class="col-lg-4 text-center py-3">
                    <div class="d-inline-flex align-items-center">
                        <div class="text-start">
                            <h6 class="text-uppercase fw-bold">Welcome Admin</h6>
                            <span>{localStorage.getItem("email")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Topbar End */}
        </div>);
    }
    else if(localStorage.getItem("role")=="user")
    {
        setHeaderContent(<div>
            {/* Topbar Start */}
            <div class="container-fluid px-5 d-none d-lg-block">
            <div class="row gx-5">
                <div class="col-lg-4 text-center py-3">
                    
                </div>
                <div class="col-lg-4 text-center border-start border-end py-3">
                    
                </div>
                <div class="col-lg-4 text-center py-3">
                    <div class="d-inline-flex align-items-center">
                        <div class="text-start">
                            <h6 class="text-uppercase fw-bold">Welcome User</h6>
                            <span>{localStorage.getItem("email")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Topbar End */}
        </div>);
    }
    else
    {
        setHeaderContent(<div>
            {/* Topbar Start */}
            <div class="container-fluid px-5 d-none d-lg-block">
            <div class="row gx-5">
                <div class="col-lg-4 text-center py-3">
                    <div class="d-inline-flex align-items-center">
                        <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                        <div class="text-start">
                            <h6 class="text-uppercase fw-bold">Our Office</h6>
                            <span>X Street, Indore , India</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-center border-start border-end py-3">
                    <div class="d-inline-flex align-items-center">
                        <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                        <div class="text-start">
                            <h6 class="text-uppercase fw-bold">Email Us</h6>
                            <span>info@example.com</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-center py-3">
                    <div class="d-inline-flex align-items-center">
                        <i class="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                        <div class="text-start">
                            <h6 class="text-uppercase fw-bold">Call Us</h6>
                            <span>XXX XXX XXXX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Topbar End */}
        </div>);
    }
 });   
  
 return (
    <div>
    <Auth />    
    { HeaderContent }    
    </div>
  );
}

export default Header;
