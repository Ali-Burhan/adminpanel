import React from 'react'
import { UpdateData } from '../Data/data'
import './updates.css'
const Updates = () => {
  return (
    <div className="updates">
      {UpdateData.map((update,index)=>{
        return(
<div className="update" key={index}>
  <img style={{borderRadius:'20%'}} src={update.img} height={100}  alt="" />
  <div className="noti">
    <div className="" style={{marginBottom:"0.5rem"}}>
      <span>{update.name} </span><span>{update.noti}</span>
    </div>
    <span>{update.time}</span>
  </div>
</div>
        )
      })}
    </div>
  )
}

export default Updates