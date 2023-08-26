import React from 'react'
import Chart from 'react-apexcharts'
const Customerreview = () => {
    const data = {
        series:[
{
    name:"Review",
    data:[10,50,30,90,40,120,100]
}
        ],
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
  return (
    <div className="CustomerReview">
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default Customerreview