import React, { useState } from 'react'
import './sidebar.css'
import logo from '../images/dashboard.svg'
import { SidebarData } from '../Data/data'
import {motion} from "framer-motion"
import {UilSignOutAlt,UilBars} from "@iconscout/react-unicons"
const Sidebar = () => {
    const [selected,setSelected] = useState(0)
    const [expanded, setExpanded] = useState(false)
    const sideBarVariant = {
        true:{
                left:'0'
        },
        false:{
            left:"-60%"
        }
    }
  return (
    <>
    <div className="bars" style={expanded ? {left:"60%"}:{left:"5%"}} onClick={()=>setExpanded(!expanded)}>
        <UilBars/>
    </div>
    <motion.div className="Sidebar"
    variants={sideBarVariant}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
        {/*Logo*/}
        <div className="logo">
            <img src={logo} alt="" />
            <span>
                C<span>o</span>de Baan
            </span>
        </div>
        <div className="menu">
            {
                SidebarData.map((item,index)=>{
                    return(
                        <div className={selected===index?'menuitem active':'menuitem' } key={index} onClick={()=>setSelected(index)}>
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })
            }
            <div className="menuitem">
            <UilSignOutAlt/>
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar