import React from "react";
import HotelCard from "../sub-components/HotelCard";
import ListStyles from "../css/list.module.css";
import NotFound from "../sub-components/NotFound";
import { filterHotels } from "../utils";
import { dateCardConversorFrom } from "../utils";
import { dateCardConversorTo } from "../utils";
export default function List(props) {
  let filteredHotel = filterHotels(
    props.listaHoteles,
    props.filter.startDate,
    props.filter.endDate,
    props.filter.country,
    props.filter.price,
    props.filter.size
  );

  if (filteredHotel.length !== 0) {
    return (
      <div className={ListStyles.list}>
        {filteredHotel.map(function (hotel) {
          return (
            <HotelCard
              key={hotel.slug}
              photo={hotel.photo}
              name={hotel.name}
              description={hotel.description}
              location={hotel.city + "," + " " + hotel.country}
              rooms={hotel.rooms}
              price={hotel.price}
              availabilityFrom={dateCardConversorFrom(hotel.availabilityFrom)}
              availabilityTo={dateCardConversorTo(hotel.availabilityTo)}
            />
          );
        })}
      </div>
    );
  }
  return <NotFound />;
}
