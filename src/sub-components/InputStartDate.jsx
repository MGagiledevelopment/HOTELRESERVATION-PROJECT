import React from "react";
import FiltersStyles from "../css/filters.module.css";

export default function InputStartDate({ startDate, setStartDate }) {
  //usé DES-ESTRUCTURING EN ESTE CASO PARA LLAMAR A LAS PROPS //

  const handleDate = (e) => {
    const fechaInput = e.target.value;
    setStartDate(fechaInput);
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
