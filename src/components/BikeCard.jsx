import React from "react";
import { Link } from 'react-router-dom';


const BikeCard = ({ bike }) => (
    <div className="card m-3 shadow-sm" style={{ width: "18rem" }}>
      <img src={bike.image} className="card-img-top" alt={bike.name} />
      <div className="card-body">
        <h5 className="card-title">{bike.name}</h5>
        <p className="card-text">{bike.description}</p>
        <p className="card-text"><strong>Type:</strong> {bike.type}</p>
        <p className="card-text"><strong>Price/Hour:</strong> ${bike.pricePerHour}</p>
        <Link to="/book" className="btn btn-primary mt-3">Rent Now</Link>
      </div>
    </div>
  );

export default BikeCard;