module.exports = {


letterGrader: function(input) {
  if (input >= 90 && input <= 100) {
    return 'A';
  }
  else if (input >= 80 && input <= 89) {
    return 'B';
  }
  else if (input >= 70 && input <= 79) {
    return 'C';
  }
  else if (input >= 60 && input <= 69) {
    return 'D';
  }
  else if (input >= 0 && input <= 59) {
    return 'F';
  }
},

averageScore: function(array) {
  if (array === undefined) {
    return '[]';
  }
  var sum = array.reduce(function(previous, current){
   return previous + current; 
  });
  return isNaN(sum) ? '[]' : sum / array.length;    
},

medianScore: function(array) {
  if (array === undefined) {
    return '[]';
  }
  array = array.sort(function(a, b){
    return (a > b) ? 1 : ((a < b) ? -1 : 0);
  });
  var isNumber = array.reduce(function(previous, current){
   return previous + current; 
  });
  if (isNaN(isNumber)) {
    return '[]';
  }
  if (array.length % 2 !== 0) {
    var medianIndex = Math.ceil((array.length/2)-1);
      return array[medianIndex];
  }
  else {
    var evenMedianIndex1 = Math.ceil(array.length/2);
    var evenMedianIndex2 = evenMedianIndex1 - 1;
      return (array[evenMedianIndex1] + array[evenMedianIndex2]) / 2;
  } 
},

modeScore: function(array) {
  if (array === undefined) {
    return '[]';
  }
  var isNumber = array.reduce(function(previous, current){
    return previous + current; 
  });
  if (isNaN(isNumber)) {
    return '[]';
  }
  array = array.sort(function(a, b){
    return (a > b) ? 1 : ((a < b) ? -1 : 0);
  });

  function checkCount(array, value) {
    var check = 0;
    for (var j = 0; j < array.length; j++) {
      if (value == array[j]) {
        check += 1;
      }
    }
  return check;
  }
  return array.reduce(function(previous, current) {
    return checkCount(array, previous) > checkCount(array, current) ? previous : current;
  });


}





}