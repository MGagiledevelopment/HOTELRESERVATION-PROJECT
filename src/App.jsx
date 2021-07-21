import React, { useState } from "react"
import { hotelsData } from "./back-info"
import "./css/main-styles.css"
import Header from "./main-components/Header"
import Filters from "./main-components/Filters"
import List from "./main-components/List"





function App() {

 let [listaHoteles, setListaHoteles] = useState(hotelsData) 

 let [country, setCountry] = useState("all")

 let [price, setPrice] = useState("all")

 let [size, setSize] = useState("all")


 

 let actualizador = (filtrado) =>{
   setListaHoteles(filtrado)
 }

 

 
  return (
    <div className="App">
    <Header />
    <Filters listaHotelesActualizada={actualizador}
             listaHoteles={listaHoteles} 
             filter={{country, price, size}}
             setter={{setCountry,setPrice,setSize}} />

    <List listaHoteles={listaHoteles} 
          filter={{country, price, size}}/>

    </div>
  );
}

export default App;
