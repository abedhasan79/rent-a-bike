import React from 'react';
import picture2 from '../shannon park/Picture2.jpg';
import picture3 from '../shannon park/Picture3.jpg';
import picture4 from '../shannon park/Picture4.jpg';
import picture5 from '../shubie park/Picture5.jpg';
import picture6 from '../shubie park/Picture6.jpg';
import picture7 from '../shubie park/Picture7.jpg';
import picture8 from '../salt marsh/Picture8.jpg';
import picture9 from '../salt marsh/Picture9.jpg';
import picture10 from '../salt marsh/Picture10.jpg';
import picture11 from '../blt trails/Picture11.jpg';
import picture12 from '../blt trails/Picture12.jpg';
import picture13 from '../blt trails/Picture13.jpg';
import picture18 from '../lakeview trail/Picture18.png';
import picture19 from '../lakeview trail/Picture19.png';
import picture20 from '../lakeview trail/Picture20.png';
import picture14 from '../hemlock ravine/Picture14.jpg';
import picture15 from '../hemlock ravine/Picture15.jpg';
import picture16 from '../hemlock ravine/Picture16.png';

const trails = [
  { title: 'Shannon Park Canada 150 Trail', image: [picture2, picture3, picture4], description: 'The Canada 150 Trail at Shannon Park in Dartmouth, Nova Scotia, is an easy and accessible loop trail suitable for all ages and abilities. Spanning approximately 1.4 kilometers (0.9 miles) with a modest elevation gain of 27 meters (88 feet), it typically takes about 21 minutes to walk . For cyclists, the trail can be completed in approximately 10 to 15 minutes, depending on pace. The trail begins with a paved section, transitioning into a crusher dust loop and culminating in a boardwalk offering panoramic views of the Halifax Harbour and both the MacKay and Macdonald bridges . It is a popular spot for wildlife observation, with frequent deer sightings, and is open year-round, welcoming walkers, runners, and cyclists alike.' },
  { title: 'Shubie Park', image: [picture5, picture6, picture7], description: 'Shubie Park in Dartmouth, Nova Scotia, offers a network of easy, multi-use trails suitable for walking, cycling, and other recreational activities. The main trail, the Shubie Canal Greenway, spans approximately 9.25 kilometers one way, with a surface of crusher dust and pavement, and is generally considered easy in difficulty. Cyclists can expect to cover the entire Shubie Canal Greenway in about 30 to 45 minutes, depending on pace and stops. The trail is linear and features minimal elevation changes, making it accessible for riders of varying skill levels. Shubie Park is trails are well-maintained and family-friendly, with amenities such as washrooms, picnic tables, and benches available at the Fairbanks Centre. The park is open year-round and is a popular destination for outdoor enthusiasts seeking a scenic and easy-to-navigate trail system.' },
  { title: 'Salt Marsh Trail – Cole Harbour, NS', image: [picture8, picture9, picture10], description: 'The Salt Marsh Trail is a breathtaking 6.5 km coastal route stretching through the heart of the Cole Harbour salt marsh. Part of the Trans Canada Trail, this easy, crushed-gravel path offers stunning panoramic views of tidal wetlands and abundant wildlife, making it a favorite for walkers, cyclists, and birdwatchers alike. With its wide, flat surface and scenic wooden bridges, the trail is accessible to all ages and abilities. Cyclists can complete the round trip in about 1.5 to 2 hours, while walkers may take 3.5 to 4 hours to fully enjoy the peaceful, immersive natural surroundings. Ideal for photography, nature observation, and quiet reflection, the Salt Marsh Trail is a must-visit destination for anyone exploring the outdoors in Nova Scotia.' },
  { title: 'BLT Rails to Trails – Beechville to Timberlea, NS', image: [picture11, picture12, picture13], description: 'The BLT Rails to Trails is a 13 km multi-use trail that winds through the scenic communities of Beechville, Lakeside, and Timberlea in Nova Scotia. Following a former railway corridor, this flat, crusher dust path is perfect for walking, running, and cycling, offering easy access for users of all ages and abilities. The trail features picturesque views of lakes, wetlands, and woodlands, providing a peaceful escape just minutes from the city. Cyclists can expect to complete the full route in about 45 to 60 minutes. As part of the Rum Runners Trail and the national Trans Canada Trail network, the BLT Trail connects with nearby routes for extended adventures along Nova Scotia’s beautiful backcountry.' },
  { title: 'Lakeview Trail', image: [picture18, picture19, picture20], description: 'The Lakeview Trail in Long Lake Provincial Park, Halifax, Nova Scotia, is a scenic 5 km trail that winds through peaceful forests, lakes, and rocky landscapes. Ideal for both hikers and cyclists, the trail offers a mix of natural terrain and gravel paths suitable for various skill levels. Cycling the full trail typically takes about 30 minutes, providing a refreshing outdoor experience surrounded by nature. The trail is family-friendly and part of a larger network within the park, allowing visitors to explore additional routes. With its beautiful views and tranquil setting, the Lakeview Trail is perfect for anyone looking to enjoy a leisurely bike ride or walk in Halifax’s natural environment.' },
  { title: 'Hemlock Ravine Park', image: [picture14, picture15, picture16], description: 'Hemlock Ravine Park in Halifax, Nova Scotia, offers a tranquil escape into nature with its 200-acre expanse of old-growth forest and a network of approximately 4 km of looped trails. These trails, primarily surfaced with crusher dust, are suitable for walking and cycling, though some sections feature hilly terrain that may require extra effort from cyclists. Cycling the entire trail system typically takes about 30 to 45 minutes, depending on individual pace and trail conditions. The park is renowned for its towering 300-year-old hemlock trees and the historic heart-shaped Julie’s Pond, adding both natural beauty and historical significance to the experience. With amenities like parking, benches, and well-marked trails, Hemlock Ravine Park provides a refreshing outdoor experience for nature enthusiasts and casual visitors alike.' }
];

const Trail = () => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <div  style={{ width: "100vh" }}>
        <div className="row justify-content-center">
          {trails.map((trail, index) => (
            <div className="col-md-4 px-3" key={index}>
              <div className="card h-100 shadow-sm mx-2">
                <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner ">
                    {trail.image.map((img, i) => (
                      <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                        <img src={img} style={{ width: "20vh", height: "20vh" }} className="d-block w-100" alt={`${trail.title} ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${index}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${index}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{trail.title}</h5>
                  <p className="card-text">{trail.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trail;