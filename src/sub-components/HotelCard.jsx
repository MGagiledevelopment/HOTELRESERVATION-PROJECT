import React from "react";
import Swal from 'sweetalert2';
import CardStyles from "../css/cards.module.css";

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
      <img id="img" src={props.photo} alt="hotel" />
      <h2>{props.name}</h2>
      <div></div>
      <p>{props.description}</p>
      <div id="location"> {props.location}</div>

      <section id="bottom">
        <div id="rooms"> {props.rooms} </div>
        <div id="price"> {props.price} </div>
        <button onClick={alert} className={CardStyles.button}>Reservar</button>
      </section>
    </div>
  );
}
