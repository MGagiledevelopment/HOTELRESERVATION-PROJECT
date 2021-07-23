import React from "react"
import HeaderStyles from "../css/header.module.css"
import { showCountry } from "../utils"
import { showPrice } from "../utils"
import { showSize } from "../utils"
import { dateCardConversorFrom } from "../utils"
import { dateCardConversorTo } from "../utils"

export default function Header (props) {
   
  

    return (
        <div className={HeaderStyles.header}>
             {/* <video src="../images/video.mp4" className={HeaderStyles.video} width="30%"name="hotelvideo" autoplay loop></video> */}
        <h1 className={HeaderStyles.title} >HOTELES </h1>
        <div className={HeaderStyles.filters}>
        <div>{`${ props.filter.startDate !== "" ? dateCardConversorFrom(props.filter.startDate + "T00:00:00") : "Desde cualquier fecha" }`} </div>
        <div>{`${ props.filter.endDate !== "" ? dateCardConversorTo(props.filter.endDate + "T00:00:00") : "Hasta cualquier fecha" }`}</div>
        <div>{showCountry(props.filter.country)}</div>
        <div>{showPrice(props.filter.price)}</div>
        <div>{showSize(props.filter.size)}</div>
        </div>
        </div>
    )
}