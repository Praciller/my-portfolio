import React from 'react'
import "./blog.css"
import Image1 from "../../assets/Dreamer-Movie.png"
import Image2 from "../../assets/Pokedex.png"
import Image3 from "../../assets/sushi-store.png"

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Project</h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://dreamer-movie-pakon-poomson.netlify.app"><span className="blog__category">Project</span></a>
            <a href="https://dreamer-movie-pakon-poomson.netlify.app"><img src={Image1} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Dreamer Moive Using React,Redux-Toolkit and scss</h3>
              <div className="blog__meta">
                <span>13 July, 2023</span>
                <span className="blog_dot">.</span>
                <span>Pakon</span>
              </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://pokedex-pakon-pomson.netlify.app"><span className="blog__category">Tutorial</span></a>
            <a href="https://pokedex-pakon-pomson.netlify.app"><img src={Image2} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Front-end Pokédex Project</h3>
              <div className="blog__meta">
                <span>13 July, 2023</span>
                <span className="blog_dot">.</span>
                <span>Pakon</span>
              </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="https://sushi-zen-pakon-poomson.netlify.app"><span className="blog__category">Tutorial</span></a>
            <a href="https://sushi-zen-pakon-poomson.netlify.app"><img src={Image3} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Responsive Sushi Website Using HTML CSS & JavaScript</h3>
              <div className="blog__meta">
                <span>01 July, 2023</span>
                <span className="blog_dot">.</span>
                <span>Pakon</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
