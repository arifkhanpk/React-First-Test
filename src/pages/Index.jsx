import React from 'react'
import Card from '../components/Card/Card'
import { cardData } from '../utils/CardData/cardData'
import "./index.css"

const Index = () => {
    console.log(cardData);


    return (
        <div className='index'>
            {cardData.map((item, index) => {
                console.log(item);
                return (
                   <div > 
                   <Card key={index} data={item} />
                   </div>

                )
            })}
        </div>
    )
}

export default Index
