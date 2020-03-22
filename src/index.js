
exports.min = function min (array) {
   
  if (!array || array.length==0 ) {return 0;}
  var minValue = Math.min.apply(null, array);
  return minValue;
  
}

exports.max = function max (array) {
  if (!array || array.length==0 ) {return 0;}
  var maxValue = Math.max.apply(null, array);
  return maxValue;
}

exports.avg = function avg (array) {
  if (!array || array.length==0 ) {return 0;}  var s = 0;
  var l = array.length;
   for (i=0; i < l; i++) {
    s = s +array[i]; 
   }
   var avgValue = s / l;
  return avgValue;
}
