// Code your solution in this file!
function distanceFromHqInBlocks(someValue,distance=42){

return Math.abs(someValue -distance) ;
}

function distanceFromHqInFeet(someValue,distance=42) {

  return  distanceFromHqInBlocks(someValue,distance)*264;
}


function distanceTravelledInFeet(start, destination){


return distanceFromHqInFeet(start,destination);
}




function calculatesFarePrice(start, destination){
let total = distanceFromHqInFeet(start,destination);
if (total>2500) {
  return 'cannot travel that far';
} else if (total<400) {
  return 0;
}else if(total>400&&total<2000){
  return (total-400)*2/100
}else
return 25;


}






