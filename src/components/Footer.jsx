import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
                <div className="row">

                    {/* Terms and Conditions */}
                    <div className="col-md-4 d-flex flex-column ">
                        <h5 style={{textAlign:'left'}}>Terms & Conditions</h5>
                        <ul className="list-unstyled small text-start">
                            <li className="mb-1">• Cancellations must be made 24 hours in advance.</li>
                            <li className="mb-1">• Pickup & drop-off available from 6 AM to 9 PM.</li>
                            <li className="mb-1">• Valid photo ID must be shown before pickup. A record (picture) of ID will be retained untill the bike is returned.</li>
                        </ul>
                    </div>

                    {/* Vertical Quick Links */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled d-flex flex-column align-items-center">
                            <li className="mb-2 border-bottom pb-1 w-10">
                                <Link to="/" className="text-white text-decoration-none d-block">Home</Link>
                            </li>
                            {/* <li className="mb-2 border-bottom pb-1 w-50">
                                <Link to="/bikes" className="text-white text-decoration-none d-block">Bikes</Link>
                            </li> */}
                            <li className="mb-2 border-bottom pb-1 w-10">
                                <Link to="/book" className="text-white text-decoration-none d-block">Book</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p className="mb-1">📞 <a href="tel:+1234567890" className="text-white text-decoration-none">+1 (234) 567-890</a></p>
                        <p>📧 <a href="mailto:info@bikerental.com" className="text-white text-decoration-none">info@bikerental.com</a></p>
                    </div>


                </div>


                <hr className="bg-white my-3" />
                <p className="mb-0">&copy; {new Date().getFullYear()} Bike Rental — All rights reserved.</p>
            </div>
        </footer >
    );
};


export default Footer;