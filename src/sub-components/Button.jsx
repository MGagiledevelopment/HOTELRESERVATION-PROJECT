import React from "react";
import Swal from "sweetalert2";
import FiltersStyles from "../css/filters.module.css";

export default function Button(props) {
  const reset = () => {
    props.setStartDate("");
    props.setEndDate("");
    props.setCountry("all");
    props.setSize("all");
    props.setPrice("all");

    Swal.fire({
      icon: "info",
      title: "¡se limpió!",
      timer: 800,
      showConfirmButton: false,
    });
  };
  return (
    <>
      <button onClick={reset} className={FiltersStyles.buttonStyle}>
        {" "}
        <i class="fas fa-trash-alt"></i> LIMPIAR{" "}
      </button>
    </>
  );
}
