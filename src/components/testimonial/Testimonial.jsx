import React from 'react'
import "./testimonial.css"
import Image1 from "../../assets/avatar-1.svg"
import Image3 from "../../assets/avatar-3.svg"
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Wison Phumson",
    subtitle: "Father",
    comment:
      "He has the determination, the effort, and the great determination in what needs to be accomplished. 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Amornrat Deekhajornkiet",
    subtitle: "R&D Manager at Fuji Seal Packaging Thailand Co.,Ltd.",
    comment:
      "I enjoy working with the theme and learn so much. He make the process fun and interesting. Good luck! ❤️",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper className="testimonials__container grid"
          // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({id,image,title,subtitle,comment})=>{
          return(
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className='testimonial__title'>{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial