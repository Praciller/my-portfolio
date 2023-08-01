import React from 'react';
import "./about.css";
import Image from "../../assets/Profile.jpg";
import AboutBox from "./AboutBox";

const About = () => {
  const resumeFileName = "Resume_Pakon.pdf";

  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm passionate about programming and have honed my skills in problem-solving, rapid learning, and staying updated with the latest technologies. Now, I'm actively searching for the ideal career opportunity. Take a look at my recent front-end projects, showcasing my expertise in creating engaging user experiences.
            </p>
            <a href={process.env.PUBLIC_URL + "/" + resumeFileName} className="btn" download>
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">UI/UX design</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Back-end</h3>
                <span className="skills__number">30%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage back_end"></span>
              </div>
            </div>
          </div>  
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
