//REMEMBER use *let* and *var* to declare variables! THIS IS NOT JAVA
//Global vars:
var listLength = 500;
var listLimit = 1000;
var bars = [];
var numbers = [];
var iteration = 0;
var xunit;
var yunit;

//Setup function (run one time at beginning)
function setup(){
  //Make the canvas fill the whole screen
  createCanvas(windowWidth, windowHeight);

  //Fill the [ numbers[] ] array random numbers from 0 to [ listLimit ] of length [ listLength ]
  for(let i = 0; i < listLength; i++){
    numbers[i] = Math.round(Math.random() * listLimit);
  }

  //Define the relative x and y units
  xunit = windowWidth / listLength;
  yunit = windowHeight / listLimit;

  numbers = customSort(numbers);
}

//Function continually run
function draw(){
  //Clear canvas each frame
  clear();

  //Setup colors
  fill(color(255, 204, 0));
  noStroke();

  //Create the bars array at the length of [ listLength ] and with the heights of from the [ numbers[] ] array
  for(let i = 0; i < listLength; i++){
    let height = numbers[i];
    bars[i] = rect((xunit * i), listLimit*yunit, xunit, yunit*-height);
  }
   //throw new Error("Script finished! - I threw an error to stop this from eating up your CPU.")
}

//Run every time window is resized
function windowResized() {
  //Resize canvas and redefine the x and y units.
  resizeCanvas(windowWidth, windowHeight);
  xunit = windowWidth / listLength;
  yunit = windowHeight / listLimit;
}


function customSort(array){
  let p = round((array.length-1) /2);
  let pvalue = array[p];
  let bigger = [];
  let smaller = [];


    for (let i = 0; i < array.length; i++){
    let current = array[i];
      if (current <= pvalue){
        smaller.push(current);
      } else {
        bigger.push(current);
      }
    }

  iteration++;
  if (iteration < 100){
     smaller = customSort(smaller);
     bigger = customSort(bigger);
  }

  let newArray = smaller.concat(bigger);
  return newArray;
}
