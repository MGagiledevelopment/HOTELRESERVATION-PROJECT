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
        <h1 className={HeaderStyles.title} >HOTELES </h1>
           
        <video autoPlay muted loop className={HeaderStyles.video} >
        <source src='./images/portada.mp4' type='video/mp4'></source>
        </video>
           
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