import React from 'react'
import "./maindash.css"
import Cards from '../cards/card'
import BasicTable from '../table/table'
const Maindash = () => {
  return (
    <div className="maindash">
      <div style={{alignSelf:'center',color:"#003459"}}>
        <h1 >Made By Ali Burhan</h1>
        <h4 className='text-center'>Inspired By Zainkeepscode</h4>
      </div>
        <Cards/>
        <BasicTable/>
    </div>
  )
}

export default Maindash