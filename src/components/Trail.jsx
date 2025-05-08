import React from 'react';
import trail1 from '../T1.jpg';
import trail2 from '../T1.jpg';
import trail3 from '../T1.jpg';
import trail4 from '../T1.jpg';
import trail5 from '../T1.jpg';
import trail6 from '../T1.jpg';

const trails = [
  { title: 'River Valley Trail', image: trail1, description: 'Scenic views along the river with gentle slopes.' },
  { title: 'Mountain Edge Path', image: trail2, description: 'Challenging terrain with stunning mountain views.' },
  { title: 'Forest Loop', image: trail3, description: 'Shaded trail surrounded by tall trees.' },
  { title: 'Seaside Ride', image: trail4, description: 'Peaceful trail along the coast.' },
  { title: 'Urban Explorer', image: trail5, description: 'A fun mix of city paths and park routes.' },
  { title: 'Nature Escape', image: trail6, description: 'Off-the-beaten path ideal for nature lovers.' }
];

const Trail = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Trails You Can Visit</h2>
      <div className="row">
        {trails.map((trail, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={trail.image} className="card-img-top" alt={trail.title} />
              <div className="card-body">
                <h5 className="card-title">{trail.title}</h5>
                <p className="card-text">{trail.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trail;