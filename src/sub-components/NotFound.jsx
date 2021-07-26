import React from "react";
import style from "../css/notfound.module.css";

export default function NotFound() {
  return (
    <div className={style.notFound}>
      <i class="far fa-frown"></i>
      <h6 className={style.h6}>
        Lo sentimos, no existe ningún HOTEL con los filtros seleccionados.
      </h6>
    </div>
  );
}
