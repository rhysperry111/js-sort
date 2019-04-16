//Global vars:
listLength = 500;
listLimit = 1000;
bars = [];
numbers = [];

interateLimit = 6;

//Setup function (run one time at beginning)
function setup(){
  //Make the canvas fill the whole screen
  createCanvas(windowWidth, windowHeight);

  //Fill the [ numbers[] ] array random numbers from 0 to [ listLimit ] of length [ listLength ]
  for(i = 0; i < listLength; i++){
    numbers[i] = Math.round(Math.random() * listLimit);
  }

  //Define the relative x and y units
  xunit = windowWidth / listLength;
  yunit = windowHeight / listLimit;

  numbers = csort(numbers);
}

//Function continually run
function draw(){
  //Clear canvas each frame
  clear();

  //Setup colors
  fill(color(255, 204, 0));
  noStroke();

  //Create the bars array at the length of [ listLength ] and with the heights of from the [ numbers[] ] array
  for(i = 0; i < listLength; i++){
    height = numbers[i];
    bars[i] = rect((0 + xunit * i), listLimit*yunit, xunit, yunit*-height);
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

iteration = 0;
function csort(array){
if (iteration < interateLimit){


  p = round((array.length-1) /2);
  pvalue = array[p];
  //pvalue = listLimit / 2;

  bigger = [];
  smaller = [];

    for (i = 0; i < array.length; i++){
    current = array[i];
      if (current <= pvalue){
        smaller.push(current);
      } else {
        bigger.push(current);
      }
    }
  //if (array.length > 1){
  //  smaller = csort(smaller);
  //  bigger = csort(bigger);
  //}
  array = smaller.concat(bigger);
  return array;
  }
  iteration++;
}
