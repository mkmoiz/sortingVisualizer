
//this whole project is built using p5.js libraries.





w = 10;
let states = [];//this array is used to add color visuals
let button, button1, button2, button3;
let slider;


function setup() {
    createCanvas(1600, 800);
    slider = createSlider(3, 100, 5)    //(used to min or max the time)creates a slider with minValue of 3 and maxValue of 100 mid of 5
    //creates a new array
    values = new Array(floor(width / w))
    for (let i = 0; i < 160; i++) {
        values[i] = random(height);
        states[i] = -1;  //for every states[i] is intialized -1 this can be assigned to 0 or 1 to change state to green or red;
    }

    button = select('#bubblesort');    //selects the id=bubblesort from index.html
    button.mousePressed(sortItBubble); //onclick  sortItBubble function is called again which calls bubblesort from algo.js

    button1 = select("#quicksort")                  
    button1.mousePressed(sortItQuick);

    button2 = select('#selectionsort')
    button2.mousePressed(sortItSelect);

    button3 = select('#mergesort');
    button3.mousePressed(sortItMerge);





    // bubbleSort(values,values.length-1);
    // values=sort(values)
}





// this functions are  used as callbacks for buttons in setup
function sortItBubble() {
    bubbleSort(values, values.length);
}

function sortItQuick() {
    quickSort(values, 0, values.length);
}

function sortItSelect() {
    selectionSort(values);
}

function sortItMerge() {
    mergeSort(values, 0, values.length);
}


//draw() is looping function draw() and setup() are builtin functions in p5.js
function draw() {
    background(0);//dark color
    stroke(0);
    for (let i = 0; i < values.length; i++) {
        if (states[i] == 0) {
            fill(255, 0, 0);
        } else if (states[i] == 1) {
            fill(150, 255, 0);
        }
        else {
            // noStroke();
            fill(255);
        }
        rect(i * w, height - values[i], w, values[i]);
    }
}