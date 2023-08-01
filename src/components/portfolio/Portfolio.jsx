import React, { useState } from 'react'
import "./portfolio.css"
import Menu from "./Menu"

const Portfolio = () => {
  
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem)=>{
      return curElem.category === categoryItem
    })

    setItems(updateItems)
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
         <span className="work__item" onClick={()=>setItems(Menu)}>Everthing</span>
         <span className="work__item" onClick={()=>filterItem("Creative")}>Creative</span>
         <span className="work__item" onClick={()=>filterItem("Art")}>Art</span>
         <span className="work__item" onClick={()=>filterItem("Design")}>Design</span>
         <span className="work__item" onClick={()=>filterItem("Branding")}>Branding</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
