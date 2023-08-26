import React from 'react'
import './card.css'
import { CardsData } from '../Data/data'
import Card from '../card/card'
const Cards = () => {
  return (
    <div className="cards">
        {CardsData.map((card,id)=>{
            return(
                <div className="parentContainer" key={id}>
                    <Card
                    title={card.title}
                    color = {card.color}
                    barValue={card.barValue}
                    value = {card.value}
                    png={card.png}
                    series={card.series}
                    id={id+1}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards