import React from 'react'
import './rightside.css'
import Updates from '../updates/updates'
import Customerreview from '../customerreview/customerreview'
const Rightside = () => {
  return (
    <div className="rightside">
        <div className="">
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div className=""><h3>Customer Review</h3>
        <Customerreview/>
        </div>
    </div>
  )
}

export default Rightside