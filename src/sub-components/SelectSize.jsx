
import FiltersStyles from "../css/filters.module.css"
import { hotelsData } from "../back-info"
import {sizeTransformer} from "../utils"


export default function SelectSize(props){


    let handlerSize = (event) =>{
       
        props.setSize(event.target.value)
    }




   return (
       <>
       <select className={FiltersStyles.filter} value={props.inputValue} onChange={handlerSize}>
           <option value="all">Cualquier Tamaño</option>
           <option value="Pequeño">Pequeño</option>
           <option value="Mediano">Mediano</option>
           <option value="Grande">Grande</option>
           
       </select>
       </>
   )
}