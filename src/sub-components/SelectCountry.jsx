import FiltersStyles from "../css/filters.module.css";

export default function SelectPais(props) {
  let handleCountry = (event) => {
    props.setCountry(event.target.value);
  };

  return (
    <>
      <select
        className={FiltersStyles.filter}
        value={props.inputValue}
        onChange={handleCountry}
      >
        <option value="all">Todos los países</option>
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Brasil">Brasil</option>
      </select>
    </>
  );
}
