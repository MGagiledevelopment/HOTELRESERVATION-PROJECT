import { AttachMoneyOutlined } from "@material-ui/icons";
import Swal from "sweetalert2";

export const sizeTransformer = (size) => {
  if (size < 10) {
    return "Pequeño";
  } else if (size >= 10 && size < 20) {
    return "Mediano";
  } else return "Grande";
};

export const priceTransformer = (price) => {
  if (price === "") {
    return "";
  } else if (price === "$") {
    return 1;
  } else if (price === "$$") {
    return 2;
  } else if (price === "$$$") {
    return 3;
  } else return 4;
};

//FUNCION PARA LAS FECHAS DENTRO DE LA CARD //

export let dateCardConversorFrom = (date) => {
  let newDate = new Date(date);
  //A CONTINUCACION UTILICE UNA FUNCION INTERNA DE JS PARA HACER MAS SENCILLA LA LECTURA DE LA FECHA //
  let enUSFormatter = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return "Desde el " + enUSFormatter.format(newDate);
};
//LA REPETÍ //
export let dateCardConversorTo = (date) => {
  let newDate = new Date(date);
  let enUSFormatter = new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return "Hasta el " + enUSFormatter.format(newDate);
};

// FUNCION RENDERIZADO DE SIGNOS PESOS //

export const iconPrice = (price) => {
  if (price === 1) {
    return (
      <span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
    );
  } else if (price === 2) {
    return (
      <span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
        <AttachMoneyOutlined fontSize="large" color="disabled" />
      </span>
    );
  } else if (price === 3) {
    <span>
      <AttachMoneyOutlined fontSize="large" />
      <AttachMoneyOutlined fontSize="large" />
      <AttachMoneyOutlined fontSize="large" />
      <AttachMoneyOutlined fontSize="large" color="disabled" />
    </span>;
  } else
    return (
      <span>
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
        <AttachMoneyOutlined fontSize="large" />
      </span>
    );
};

//FUNCION PARA GENERAR LA LISTA FILTRADA QUE SE MUESTRA EN LIST //

export let filterHotels = (
  arrayHotels,
  startDate,
  endDate,
  country,
  price,
  size
) => {
  const filteredArray = arrayHotels

    .filter(function (hotel) {
      //estas dos variables de a continuacion lo que hacen es pasarme los valores a UNIX para compararlos
      // en la condicion que armé debajo
      const newDateEnd = new Date(endDate + "T00:00:00").getTime(); // el timestamp se agrega para que se regularice el desfasaje de tiempo
      const newDateStart = new Date(startDate + "T00:00:00").getTime();

      console.log(newDateStart);
      console.log(newDateEnd);

      if (startDate === " " || endDate === " ") {
        return hotel;
      } else if (newDateStart >= newDateEnd) {
        Swal.fire({
          icon: "error",
          title: "La fecha de ingreso NO puede ser mayor a la de egreso",
          showConfirmButton: true,
        });
        return hotel;
      } else if (newDateStart <= newDateEnd) {
        return (
          hotel.availabilityTo <= newDateEnd &&
          hotel.availabilityTo >= newDateStart
        );
      } else return hotel;
    })

    .filter(function (hotel) {
      if (country !== "all") {
        return hotel.country === country;
      }
      return hotel;
    })

    .filter(function (hotel) {
      if (price !== "all") {
        let priceCategory = priceTransformer(price);
        //  console.log(priceCategory)
        return priceCategory === hotel.price;
      }

      return hotel;
    })

    .filter(function (hotel) {
      if (size !== "all") {
        let sizeCategory = sizeTransformer(hotel.rooms);

        return sizeCategory === size;
      }
      return hotel;
    });

  return filteredArray;
};

//FUNCIONES PARA MOSTRAR FILTRO EN EL HEADER //
//fecha

//pais

export let showCountry = (country) => {
  if (country !== "all") {
    return "En " + country;
  } else return "De cualquier lugar";
};

// precio
export let showPrice = (price) => {
  let priceConversor = (valor) => {
    if (valor === "$") {
      return "De bajo precio";
    } else if (valor === "$$" || valor === "$$$") {
      return "De precio medio";
    } else {
      if (valor === "$$$$") {
        return "De precio elevado";
      }
    }
  };

  if (price !== "all") {
    return priceConversor(price);
  } else return "De cualquier precio";
};

//tamaño

export let showSize = (size) => {
  if (size !== "all") {
    return "De tamaño " + size.toLowerCase();
  } else return "De cualquier tamaño";
};
