import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import "./style.css"
import image1 from "../../assets/image/project11.png";
import image2 from "../../assets/image/project12.png"
import image3 from "../../assets/image/project13.png"

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES =[
    {
        src: image2,
        link:'ecommerce-henna-phi-31.vercel.app'
    },
    {
        src: image1,
        link: 'todo-app-woad-nine.vercel.app'
    },
    {
        src: image3,
        link:'dashboard-sales-two.vercel.app'
    
    }
]

const Carousel = () => {
    
  return (
    <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Carousel