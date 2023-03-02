import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div className='Container'>
        <Section className="model-3"
          title= "Model 3"
          description= "Leasing start at $349/mo"
          backgroundImg="images/model-3.jpg"
          leftBtnText ="Custom order"
          rightBtnText ="Demo drive"
          src="images/down-arrow.svg"
        />
        <Section
          title= "Model Y"
          backgroundImg= "images/model-y.jpg"
          leftBtnText ="Custom order"
          rightBtnText ="Demo drive"
        />
          <Section className="model-S"
          title= "Model S"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "images/model-s.jpg"
          leftBtnText ="Custom order"
          rightBtnText ="View inventory"
        />
        
         <Section
          title= "Model X"
          description= "Schedule a demo drive"
          backgroundImg= "images/model-x.jpg"
          leftBtnText ="Custom order"
          rightBtnText ="View inventory"
        />
         <Section
          title= "Solar Panel"
          description= "Lowest Cost Solar Panels in America"
          backgroundImg="images/solar-panel.jpg"
          leftBtnText ="Custom order"
          rightBtnText ="Learn more"
        />
         <Section
          title= "Solar Roof"
          description= "Produce Clean Energy From Your Roof"
          backgroundImg= "images/solar-roof.jpg"
          leftBtnText ="Custom order"
          rightBtnText ="Learn more"
        />
        <Section
          title= "Accessories"
          backgroundImg= "images/accessories.jpg"
          leftBtnText ="Shop Now"
        />
    </div>
  )
}
export default Home