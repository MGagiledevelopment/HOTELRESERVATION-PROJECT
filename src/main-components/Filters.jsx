import React from "react";
import FiltersStyles from "../css/filters.module.css";
import InputStartDate from "../sub-components/InputStartDate"
import InputEndDate from "../sub-components/InputEndDate"
import SelectCountry from "../sub-components/SelectCountry";
import SelectPrice from "../sub-components/SelectPrice";
import SelectSize from "../sub-components/SelectSize";
import Button from "../sub-components/Button";

export default function Filters(props) {
  
  return (
    <div className={FiltersStyles.filters}>
      <InputStartDate/>
      <InputEndDate/>
      
      <SelectCountry
        inputValue={props.filter.country}
        setCountry={props.setter.setCountry}
      
      />
      <SelectPrice 
       inputValue={props.filter.price}
      setPrice={props.setter.setPrice}
      />
      <SelectSize 
      inputValue={props.filter.size}
      setSize={props.setter.setSize}
      
      />
      <Button
      listaHotelesActualizada={props.listaHotelesActualizada}
      hotelList={props.listaHoteles} 
      setPrice={ props.setter.setPrice}
              setCountry={props.setter.setCountry}
              setSize={props.setter.setSize} />
    </div>
  );
}
