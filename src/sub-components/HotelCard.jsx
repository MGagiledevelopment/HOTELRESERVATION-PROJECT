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
      <h2>{props.name}</h2>
      <div>{props.availabilityFrom}</div>
      <div>{props.availabilityTo}</div>
      <p>{props.description}</p>
      <div > {props.location}</div>

      <section className={CardStyles.bottom}>
        <div > {props.rooms} habitaciones </div>
        <div > {iconPrice(props.price)}</div>
      </section>

      <button onClick={alert} className={CardStyles.button}>Reservar</button>
    </div>
  );
}
