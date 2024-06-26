import React from 'react';

const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">eric sentongo</h5>
            {/* <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#">Home</a>
                <a className="p-2 text-dark" href="#">Services</a>
                <a className="p-2 text-dark" href="#">Portfolio</a>
                <a className="p-2 text-dark" href="#">Contact</a>
            </nav> */}
            <a className="cta-btn bold" href="mailto:sentongoeric@gmail.com">Get in touch</a>
        </div>
    );
}

export default Navbar;