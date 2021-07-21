// import { hotelsData } from "./back-info";

export const sizeTransformer = (size) => {
 if (size <10){
   return "Pequeño"
 } else if ( size >= 10 && size < 20){
   return "Mediano"

 } else return "Grande"

};

export const priceTransformer = (price) => {
  if (price === "") {
    return "";
  } else if (price === "$") {
    return 1;
  } else if (price === "$$") {
    return 2;
  } else if (price === "$$$") {
    return 3;
  } else return 4;
};

// export const sizeTransformer = (size) =>{

// 	if (size === "Pequeño") {
// 	   return 10
//    } else if (size === "Mediano") {
// 	   return 19
//    } else
// 	   return 20

// }


export let  filterHotels = (
  arrayHotels,
  country,
  price,
  size
) =>{
  

const filteredArray = arrayHotels

.filter(function(hotel){
 if (country !== "all") {
   return hotel.country === country
 }
 return hotel
})

.filter(function(hotel){
 if(price !== "all"){
   let priceCategory = priceTransformer(price)
  //  console.log(priceCategory)
   return priceCategory === hotel.price 
 }

 return hotel
})

.filter(function(hotel){
if(size !== "all"){
  let sizeCategory = sizeTransformer(hotel.rooms)

  return  sizeCategory === size
}
return hotel 
})


return filteredArray

}

