import React, { useState } from 'react'
import {LayoutGroup,color,motion} from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import  './card.css'
import Chart from 'react-apexcharts'
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons'
const Card = (props) => {
  const [expanded,setExpanded] = useState(false)

  return (
    <LayoutGroup>
      {
        expanded? (
          <ExpandedCard params={props} setExpanded={()=>setExpanded(false)}/>
        ):
        <CompactCard params={props} setExpanded={()=>setExpanded(true)}/>
      }
    </LayoutGroup>
  )
}

function CompactCard({params,setExpanded}) {
  const Png = params.png
  return (
    <motion.div className="CompactCard"
    style={{background:params.color.backGround,
    boxShadow:params.color.boxShadow
    }}
    onClick={setExpanded}
    layoutId={params.id}
    >
      <div className="radialbar">
        <CircularProgressbar
        value={params.barValue}
        text={`${params.barValue}%`}
        />
        <span>{params.title}</span>
      </div>
      <div className="detail">
      <Png/>
      <span>{params.value}</span>
      <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

function ExpandedCard({params,setExpanded}) {
  const data = {
    options:{
      chart:{
        type:'area',
        height: 'auto',
      },
      dropShadow:{
        enabled:false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color:"#000",
        opacity:0.35,
      },
      fill:{
        colors:["#fff"],
        type:"gradient",
      },
      dataLabels:{
        enabled:false,
      },
      stroke:{
        curve:"smooth",
        colors:["white"]
      },
      tooltip:{
        x:{
          format:"dd/mm/yyyy HH:mm",
        },

      },
      grid:{
        show:true
      },
      xaxis:{
        type:"datetime",
        categories:[
          "2023-08-25T00:00:00.000Z",
          "2023-08-25T01:00:00.000Z",
          "2023-08-25T02:00:00.000Z",
          "2023-08-25T03:00:00.000Z",
          "2023-08-25T04:00:00.000Z",
          "2023-08-25T05:00:00.000Z",
          "2023-08-25T06:00:00.000Z"
        ]
      }

    }
  }
  return(
    <motion.div className="ExpandableCard"
    style={{
      background:params.color.backGround,
      boxShadow:params.color.boxShadow,
    }}
    layoutId={params.id}
    >
<div style={{alignSelf:"flex-end",cursor:"pointer",color:"white"}}>
  <UilTimes onClick={setExpanded}
  
  />
</div>
<span>{params.title}</span>
<div className="chartContainer">
<Chart series={params.series} type='area' options={data.options}/>
</div>
<span>Last 24 hours</span>
    </motion.div>
  )
}



export default Card