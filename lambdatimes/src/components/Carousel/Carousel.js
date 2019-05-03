import React, { useState, useEffect } from 'react';
import { carouselData } from '../../data'


export default function Carousel(props) {
  const [images, setImages] = useState(carouselData)
  const [activeDisplay, setActiveDisplay] = useState(images[0])
  const [activeIndex, setActiveIndex] = useState(0)



  const handleClick = (direction) => {
    const firstImg = images[0]
    const lastImg = images[images.length - 1]

    switch(direction) {
      case 'left': 
        if (activeIndex === 0) {
          setActiveDisplay(lastImg)
          setActiveIndex(images.indexOf(activeDisplay))
        } else {
          setActiveDisplay(images[activeIndex - 1]) 
          setActiveIndex(activeIndex - 1)
        }
        break
      case 'right': 
        if (activeIndex >= images.length - 1) {
          setActiveDisplay(firstImg)
          setActiveIndex(0)
        } else {
          setActiveDisplay(images[activeIndex + 1])
          setActiveIndex(images.indexOf(activeDisplay))
        }
        break
    }
  }

  // const selectedImage = () => {
  //   return <img src={''} style={{display: 'block'}} />
  // }
  

  return (
    <div className="carousel">
      <div 
        className="left-button" 
        onClick={handleClick.bind(null, 'left')}
      >
          {"<"}
      </div>
      
      <img style={{display:'block'}}src={activeDisplay}></img>

      <div 
        className="right-button" 
        onClick={handleClick.bind(null, 'right')}
      >
          {">"}
      </div>
    </div>
  )
}