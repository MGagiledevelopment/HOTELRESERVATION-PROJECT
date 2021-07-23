import React from "react";
import FiltersStyles from "../css/filters.module.css";

export default function InputEndDate({ endDate, setEndDate }) {
  const handleDate = (e) => {
    const inputDate = e.target.value;
    setEndDate(inputDate);
  };

  return (
    <input
      type="date"
      className={FiltersStyles.filter}
      onChange={handleDate}
      value={endDate}
    />
  );
}
