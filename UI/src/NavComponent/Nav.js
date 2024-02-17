import './Nav.css';
import { Link } from 'react-router-dom'; 
import { useState , useEffect } from 'react';

function Nav() {
  const [ NavContent , setNavContent ] = useState(); 
  
  useEffect(()=>{
    if(localStorage.getItem("role")=="admin")
    {
        setNavContent(<div>
            {/* Navbar Start */}
            <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                    <a href="index.html" class="navbar-brand">
                        <h1 class="m-0 display-4 text-uppercase text-white"><i class="bi bi-building text-primary me-2"></i>eAuction</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
                            <a class="nav-item nav-link"><Link to="/manageusers">Manage Users</Link></a>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#F95C14"}} >Category</a>
                                <div class="dropdown-menu m-0">
                                    <a class="dropdown-item"><Link to="/addcategory">Add Category</Link></a>
                                    <a class="dropdown-item"><Link to="/addsubcategory">Add Sub Category</Link></a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#F95C14"}} >Settings</a>
                                <div class="dropdown-menu m-0">
                                    <a class="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                                    <a class="dropdown-item"><Link to="/epadmin">Edit Profile</Link></a>
                                </div>
                            </div>
                            {/*<a class="nav-item nav-link"><Link to="/register">Register</Link></a>*/}
                            <a class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"><Link style={{"color":"white"}} to="/logout">Logout</Link><i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            </div>);
    }
    else if(localStorage.getItem("role")=="user")
    {
        setNavContent(<div>            {/* Navbar Start */}
            <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                    <a href="index.html" class="navbar-brand">
                        <h1 class="m-0 display-4 text-uppercase text-white"><i class="bi bi-building text-primary me-2"></i>eAuction</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link active"><Link to="/admin">User Home</Link></a>
                            <a class="nav-item nav-link"><Link to="/viewcategory">Search Auction</Link></a>
                            {/*<a class="nav-item nav-link"><Link to="/about">About</Link></a>
                            <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>*/}
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Product</a>
                                <div class="dropdown-menu m-0">
                                    <a class="dropdown-item"><Link to="/apuser">Add Product</Link></a>
                                    <a class="dropdown-item"><Link to="/vpuser">View Product</Link></a>
                                </div>
                            </div>
                            {/*<a class="nav-item nav-link"><Link to="/register">Register</Link></a>*/}
                            <a class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"><Link style={{"color":"white"}} to="/logout">Logout</Link><i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}</div>);
    }
    else
    {
        setNavContent(<div>
            {/* Navbar Start */}
            <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                    <a href="index.html" class="navbar-brand">
                        <h1 class="m-0 display-4 text-uppercase text-white"><i class="bi bi-building text-primary me-2"></i>eAuction</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                            <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                            <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                            <div class="nav-item dropdown">
                                <a style={{"color":"#CA4A10"}} class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                                <div class="dropdown-menu m-0">
                                    <a class="dropdown-item"><Link to="/blog">Blog</Link></a>
                                    <a class="dropdown-item"><Link to="/portfolio">Portfolio</Link></a>
                                </div>
                            </div>
                            <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                            <a class="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"><Link style={{"color":"white"}} to="/login">Login</Link><i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            </div>);
    }
  });

  return (
    <div>   
    {NavContent}
    </div>
  );
}

export default Nav;
