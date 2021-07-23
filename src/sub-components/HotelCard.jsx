import React from "react";
import Swal from 'sweetalert2';
import CardStyles from "../css/cards.module.css";
import { iconPrice } from "../utils";


export default function HotelCard(props) {
    let alert = () =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '  RESERVADO',
        showConfirmButton: false,
        timer: 1500
      })
    }






  return (
    <div className={CardStyles.card}>
      <img className={CardStyles.photo} src={props.photo} alt="hotel" />
      <h2 className={CardStyles.title}>{props.name}</h2>
      <div className={CardStyles.dates}>{props.availabilityFrom}</div>
      <div className={CardStyles.dates}>{props.availabilityTo}</div>
      <p className={CardStyles.description}>{props.description}</p>
      <div className={CardStyles.location}> {props.location}</div>

      <section className={CardStyles.bottom}>
        <div className={CardStyles.rooms} > <i class="fas fa-bed"></i> {props.rooms} habitaciones </div>
        <div className={CardStyles.price}> {iconPrice(props.price)}</div>
      </section>

      <button onClick={alert} className={CardStyles.button}>RESERVAR</button>
    </div>
  );
}
