//Remember the first loop returns non-plural "loop" vs "loops"
//Use else statement for the remaining loops.
//Also use intepolate... ${  }, not the "string " + i + " anotherstring")
function forLoop(array) {
    for (var i = 0; i < 25; i++){
      if (i === 1) {
        array.push(`I am ${i} strange loop.`);
      } else {
        array.push(`I am ${i} strange loops.`);
      }
    }
    return array;
}

//n is the variable to track the progression of the loop until it hits 0.
function whileLoop(n) {
    while (n > 0) {
      console.log(--n);
    }
    return "done";
}



/*
function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
    //Do something here
    array = array.pop();
      return array;
  } while  (array.length > 0 && maybeTrue());
}
*/
function doWhileLoop(array){

  function maybeTrue() {
      return Math.random() >= 0.5
 } do {array = array.pop} while (array.length > 0 && maybeTrue());
 return array
}
