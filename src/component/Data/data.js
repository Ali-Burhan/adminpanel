import {
UilEstate,
UilClipboardAlt,
UilUsersAlt,
UilPackage,
UilChart,
UilSignOutAlt,UilUsdSquare,UilMoneyWithdrawal
}
from '@iconscout/react-unicons'
import img1 from '../images/Ali.jpg'
import img2 from '../images/ahmad.jpg'
import img3 from '../images/Ali3.jpg'


export const SidebarData = [
    {
        icon:UilEstate,
        heading:"Dashboard"
    },
    {
        icon:UilUsersAlt,
        heading:"Customers"
    },
    {
        icon:UilClipboardAlt,
        heading:"Sales"
    },
    {
        icon:UilPackage,
        heading:"Stock"
    },
    {
        icon:UilChart,
        heading:"Analytics"
    }
    
]

export const CardsData = [
    {
        title:'Sales',
        color:{
backGround:"#00a896",
boxShadow:"0px 10px 20px 0px #00a896",
        },
        barValue:70,
        value:"25,900",
        png:UilUsdSquare,
        series:[
            {
                name:'Sales',
                data:[31,40,28,51,42,109,100],

            }
        ]
    },
     {
        title:'Revenue',
        color:{
backGround:"#001f54",
boxShadow:"0px 10px 20px 0px #001f54",
        },
        barValue:80,
        value:"14,900",
        png:UilMoneyWithdrawal,
        series:[
            {
                name:'Revenue',
                data:[10,100,50,70,80,30,40],
                
            }
        ]
    },
    
     {
        title:'Expenses',
        color:{
backGround:"#ef233c",
boxShadow:"0px 10px 20px 0px #ef233c",
        },
        barValue:60,
        value:"4,900",
        png:UilClipboardAlt,
        series:[
            {
                name:'Expenses',
                data:[10,25,15,30,12,15,20],
                
            }
        ]
    },
    
]


export const UpdateData = [
    {
        img:img1,
        name:"Ali Burhan",
        noti:"Has Ordered Lenovo Laptop with 10000mh battery",
        time:"52 seconds ago",
    },
    {
        img:img2,
        name:"Ahmad Subhan",
        noti:"Has received Electronic mouse for laptop",
        time:"38 minutes ago",
    },
    {
        img:img3,
        name:"Qaiser Nadeem",
        noti:"Has Ordered HP inkjet printer with cottages",
        time:"1 hours ago",
    }
]