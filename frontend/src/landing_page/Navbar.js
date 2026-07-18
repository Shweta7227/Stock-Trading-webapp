import React from 'react';

function Navbar() {
    return (
        
            <nav class="navbar navbar-expand-lg bg-white border-bottom p-3" style={{width:"100%"}}>
                <div class="container px-5">
                    <a class="navbar-brand" href="#">
                        <img src="media/images/logo.svg" alt="Logo" style={{width:"25%"}}/>
                    </a>
                    <button class="navbar-toggler" type="button" style={{border:"none"}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <form class="d-flex" role="search">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3">
                                <a class="nav-link active" href="#">Signup</a>
                            </li>
                             <li className="nav-item px-3">
                                <a class="nav-link active" href="#">About</a>
                            </li> 
                            <li className="nav-item px-3">
                                <a class="nav-link active" href="#">Product</a>
                            </li> 
                            <li className="nav-item px-3">
                                <a class="nav-link active" href="#">Pricing</a>
                            </li>
                             <li className="nav-item px-3">
                                <a class="nav-link active" href="#">Support</a>
                            </li>
                           
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;