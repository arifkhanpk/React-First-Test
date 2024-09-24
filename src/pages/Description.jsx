import React from 'react'
import { useParams } from 'react-router-dom'
import { cardData } from '../utils/CardData/cardData'
import "./description.css"
import { FaFacebook } from "react-icons/fa";


const Description = () => {
  const {id} = useParams();
  console.log(useParams());
  
  const singleData =cardData.find((item) => {
    return item.id == id;
  })  
  const {name,description,profileImage,background,profession}= singleData

  return (
    <div className='descriptionWrap' style={{backgroundImage:`url(${background})`}}>
      <div className='description'>
      <div className='descriptionImage'>
        <img src={profileImage?profileImage:"/public/imgs/defaultProfile.jpg"} />
      </div>
      <div className="detailProfession">
            <h1>{name}</h1>
            <h5>{profession}</h5>
            <p>{description}</p>
            <div className='icons'>
            <FaFacebook />
           
            </div>
    
    <button className='btn'>Choose Me </button>
        </div>
    </div>

    </div>
  )
}

export default Description
