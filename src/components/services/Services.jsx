// import React from 'react'
// import "./services.css"
// import Image1 from "../../assets/w-1-Tutor.svg"
// import Image2 from "../../assets/w-2-Reseach.svg"
// import Image3 from "../../assets/w-3-RD.svg"

// const data = [
//   {
//     id: 1,
//     image: Image1,
//     title: "Tutor",
//     description:
//       "Teach Mathematics, Physics, and Chemistry at middle and high school levels, including university entrance exam preparation.",
//   },
//   {
//     id: 2,
//     image: Image2,
//     title: "R&D Officer",
//     description:
//       "Supervised work requests, Improved product quality and monitored testing and sampling production processes. Provided customer responses and  met turnaround targets.",
//   },
//   {
//     id: 3,
//     image: Image3,
//     title: "Researcher Trainee",
//     description:
//       "Experiment to find the condition and test the quality of the production of oil from plastic and the production of activated carbon.",
//   },
// ];

// const Services = () => {
//   return (
//   <section className="service container section" id='services'>
//     <h2 className="section__title">Recent Works</h2>

//     <div className="services__container grid">
//       {data.map(({id,image,title,description})=>{
//         return(
//           <div className="services__card" key={id}>
//             <img src={image} alt='' className="services__img" />
//             <h3 className="services__title">{title}</h3>
//             <p className="services__description">{description}</p>
//           </div>
//         )
//       })}
//     </div>
//   </section>
//   )
// }


// export default Services

import React from 'react';
import './services.css';
import Image1 from '../../assets/w-1-Tutor.svg';
import Image2 from '../../assets/w-2-Reseach.svg';
import Image3 from '../../assets/w-3-RD.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Tutor',
    description:
      'Teach Mathematics, Physics, and Chemistry at middle and high school levels, including university entrance exam preparation.',
  },
  {
    id: 2,
    image: Image2,
    title: 'R&D Officer',
    description:
      'Supervised work requests, Improved product quality and monitored testing and sampling production processes. Provided customer responses and  met turnaround targets.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Researcher Trainee',
    description:
      'Experiment to find the condition and test the quality of the production of oil from plastic and the production of activated carbon.',
  },
];

const Services = () => {
  return (
    <section className="service container section" id="services">
      <h2 className="section__title">Recent Works</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              {/* Add the card div around each service item */}
              <div className="card">
                <h2>{title}</h2>
              </div>
              {/* End of card div */}
              <img src={image} alt="" className="services__img" />
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
