import React from "react";
import HotelCard from "../sub-components/HotelCard";
import ListStyles from "../css/list.module.css";
import NotFound from "../sub-components/NotFound";
import { filterHotels } from "../utils"

export default function List(props) {

   let filteredHotel = filterHotels( 
      props.listaHoteles,
      props.filter.country,
      props.filter.price,
      props.filter.size
   )
// console.log(props.filter.size)
 
  

  if (filteredHotel.length !== 0) {
    

    return (
      
      <div className={ListStyles.list}>
        {filteredHotel.map(function (hotel) {
          return (
            <HotelCard
              photo={hotel.photo}
              name={hotel.name}
              description={hotel.description}
              location={hotel.city + hotel.country}
              rooms={hotel.rooms}
              price={hotel.price}
              availabilityFrom={hotel.availabilityFrom}
              availabilityTo={hotel.availabilityTo}
            />
          );
        })}
      </div>
    );
  }
  return <NotFound />;
}
