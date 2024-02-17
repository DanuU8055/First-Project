import './Footer.css';
import { useState , useEffect } from 'react';

function Footer() {
  
  const [ FooterContent , setFooterContent ] = useState();

  useEffect(()=>{
    setInterval(()=>{    
        if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
        {
            setFooterContent();
        }
        else
        {
        setFooterContent(<div>
<div class="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-6 pe-lg-5">
                <a href="index.html" class="navbar-brand">
                    <h1 class="m-0 display-4 text-uppercase text-white"><i class="bi bi-building text-primary me-2"></i>eAuction</h1>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores velit eius voluptatem provident, ea deserunt veritatis ipsum quia perferendis eaque minima adipisci eum necessitatibus cumque explicabo nemo magni. Necessitatibus, veniam! Repudiandae, ullam iusto. Inventore quas porro odit sapiente natus pariatur sint provident at. Doloribus iusto est magnam autem modi quasi.</p>
                <p><i class="fa fa-map-marker-alt me-2"></i>X Street, Indore , India</p>
                <p><i class="fa fa-phone-alt me-2"></i>XXX XXX XXXX</p>
                <p><i class="fa fa-envelope me-2"></i>info@example.com</p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-0 me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-0" href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-6 ps-lg-5">
                <div class="row g-5">
                    <div class="col-sm-6">
                        <h4 class="text-white text-uppercase mb-4">Quick Links</h4>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Contact</a>
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Service</a>
                            <a class="text-white-50" href="#"><i class="fa fa-angle-right me-2"></i>Login</a>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h4 class="text-white text-uppercase mb-4">Popular Links</h4>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                            <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                            <a class="text-white-50" href="#"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <h4 class="text-white text-uppercase mb-4">Make Query</h4>
                        <div class="w-100">
                            <div class="input-group">
                                <input type="text" class="form-control border-light" style={{"padding":"20px 30px"}} placeholder="Your Email Address" /><button class="btn btn-primary px-4">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>);
        }
    },10);    
  },[]);

  return (
    <div>
    { FooterContent }
    </div>
  );
}

export default Footer;
