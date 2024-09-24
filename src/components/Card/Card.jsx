import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'
import { FaFacebook  } from "react-icons/fa";



const Card = ({data}) => {
    const {id,name,description,profileImage,background,profession}= data
    // console.log( cardData);
    const navigate = useNavigate()
    console.log( "data");
    console.log(useNavigate);
    
    
  return (
    <div className='main'>
      <div >
        <img className='backImage' src={background} alt="" />
      </div>
      <div className='userData'>
        <div >
            <img className='userImage' src={profileImage?profileImage:"public/imgs/defaultProfile.jpg"} />
           
        </div>
        <div className="userText">
            <h1>{name}</h1>
            <h5>{profession}</h5>
            <p>{description}</p>
            <div className='icons'>
            <FaFacebook />
           
            </div>
            <button className='btn' onClick={()=>{navigate(`/detail/${id}`)}}>View</button>
        </div>
      </div>
    </div>
  )
}

export default Card
