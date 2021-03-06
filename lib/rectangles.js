
function area(rectangle) {
  return rectangle.width  * rectangle.height
}

function perimeter(rectangle) {
  return rectangle.width * 2 + rectangle.height * 2
}

function diagonal(rectangle){
 diagonal = Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2))
 return Math.round(diagonal * 100) /100
}

function isSquare(rectangle){
  if(rectangle.width === rectangle.height){
    return true;
  }
  else{
    return false;
  }
}


module.exports = {
  area,
  perimeter,
  diagonal,
  isSquare
}
