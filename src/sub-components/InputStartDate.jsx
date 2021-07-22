import React from "react";
import FiltersStyles from "../css/filters.module.css";

export default function InputStartDate({ startDate, setStartDate }) {
  //usé DES-ESTRUCTURING EN ESTE CASO PARA LLAMAR A LAS PROPS //

  const handleDate = (e) => {

   const fechaInput = e.target.value
   
    
   const fechaCreada = new Date(fechaInput+"T00:00:00").getTime() // el timestamp se agrega para que se regularice el desfasaje de tiempo


   setStartDate(fechaInput)

  };

  return (
    <>
      <input
        type="date"
        className={FiltersStyles.filter}
        onChange={handleDate}
        value={startDate}
      />
    </>
  );
}
