import React from "react";
import bikes from "../data/bikes";
import BikeCard from "../components/BikeCard";

const BikeList = () => {
    return (
      <div className="container py-5">
        <h1 className="mb-4 text-center">Available Bikes</h1>
        <div className="row justify-content-center">
          {bikes.map((bike) => (
            <div key={bike.id} className="col-md-4 d-flex justify-content-center">
              <BikeCard bike={bike} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default BikeList;