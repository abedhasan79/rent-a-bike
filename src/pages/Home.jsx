import React from "react";
import { Link } from 'react-router-dom';
import Trail from '../components/Trail';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: "url('/images/albrolake.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '40vh',
                    position: 'relative',
                }}
            >
                <div
                    className="container"
                    style={{
                        backgroundColor: 'rgba(35, 35, 35, 0.5)', // Optional: darken background for better text contrast
                        padding: '2rem',
                        borderRadius: '10px',
                    }}
                >
                    <h1 className="display-4 fw-bold">Welcome to Bike Rental</h1>
                    <p className="lead mt-3">
                        Explore the city with eco-friendly and affordable bikes from our Albro Lake location <span className="fs-1 fw-bold">only 10$ a day!</span>
                    </p>
                    {/* <Link to="/" className="btn btn-light btn-lg mt-4">View Bikes</Link> */}
                </div>
            </section>

            {/* One Location Highlight */}
            <section className="py-4 bg-light text-center">
                <div className="container">
                    {/* <h2 className="mb-4">Visit Us</h2> */}
                    <p className="lead">We’re located at <strong>Dartmouth, Nova Scotia</strong> — just steps away from transit, parks, and major attractions.</p>
                    <p>Open daily from 6am to 9pm.</p>
                </div>
            </section>



            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img
                            src="/images/b1.jpeg"
                            alt="Bike"
                            className="img-fluid rounded shadow-sm"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Ride in Style</h2>
                        <p>
                            Discover our top-of-the-line rental bikes built for comfort and performance.
                            Whether you're exploring the city or hitting the trails, our bikes are perfect for every journey.
                        </p>
                        <ul>
                            <li>Comfortable and lightweight</li>
                            <li>24-speed gear system</li>
                            <li>Includes helmet and lock</li>
                            <li>Available for hourly or daily rental</li>
                        </ul>

                        <div className="">
                            <Link to="/book" className="btn btn-success mt-3">Book a Bike</Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Call to Action */}
            {/* <section className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Ready to Ride?</h2>
                    <Link to="/book" className="btn btn-success btn-lg">Book Your Bike</Link>
                </div>
            </section> */}

            <div className="d-flex justify-content-center">
                <hr className="mb-2" style={{ borderTop: '3px solid #ccc', width: '50vh' }} />
            </div>
            <Trail />

        </div>
    );
};

export default Home;