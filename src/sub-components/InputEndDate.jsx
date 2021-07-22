import React from "react"
import FiltersStyles from "../css/filters.module.css"



export default function InputEndDate ({endDate, setEndDate}) {

    const handleDate = (e) => {

        const inputDate = e.target.value
        
         
        const newDate = new Date(inputDate+"T00:00:00").getTime() // el timestamp se agrega para que se regularice el desfasaje de tiempo
       
     
        setEndDate(inputDate)
        
    }

    return <input type="date" className={FiltersStyles.filter} onChange={handleDate}   value={endDate}
    />
    }
