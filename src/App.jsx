import React, { useState } from "react";
import { hotelsData } from "./back-info";
import "./css/main-styles.css";
import Header from "./main-components/Header";
import Filters from "./main-components/Filters";
import List from "./main-components/List";
import Footer from "./main-components/Footer";

function App() {
  let [listaHoteles, setListaHoteles] = useState(hotelsData);

  let [startDate, setStartDate] = useState("");

  let [endDate, setEndDate] = useState("");

  let [country, setCountry] = useState("all");

  let [price, setPrice] = useState("all");

  let [size, setSize] = useState("all");

  let actualizador = (filtrado) => {
    setListaHoteles(filtrado);
  };

  return (
    <div className="App">
      <Header filter={{ startDate, endDate, country, price, size }} />
      <Filters
        listaHotelesActualizada={actualizador}
        listaHoteles={listaHoteles}
        filter={{ startDate, endDate, country, price, size }}
        setter={{ setStartDate, setEndDate, setCountry, setPrice, setSize }}
      />

      <List
        listaHoteles={listaHoteles}
        filter={{ startDate, endDate, country, price, size }}
      />
     
     <Footer />

    </div>
    
  
  );
}

export default App;
