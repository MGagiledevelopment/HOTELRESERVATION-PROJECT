
import FiltersStyles from "../css/filters.module.css"


export default function SelectPrice(props){
  

     let handlerPrice = (event) =>{
        props.setPrice(event.target.value)
     }



    return (
        <>
        <select className={FiltersStyles.filter}value={props.inputValue} onChange={handlerPrice}>
            <option value="all">Cualquier Precio</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
        </select>
        </>
    )
}