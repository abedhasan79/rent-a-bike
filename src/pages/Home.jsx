import React from "react";
import { Link } from 'react-router-dom';

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
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: darken background for better text contrast
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
            <section className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="mb-4">Visit Us</h2>
                    <p className="lead">We’re located at <strong>4 Leaman Dr., Dartmouth, NS</strong> — just steps away from transit, parks, and major attractions.</p>
                    <p>Open daily from 6am to 9pm.</p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-4">Ready to Ride?</h2>
                    <Link to="/book" className="btn btn-success btn-lg">Book Your Bike</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;