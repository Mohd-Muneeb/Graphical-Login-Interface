console.log("Hello");

//Steps for this to work

//----------------------------------------//
//Get images to load
//Get the images in a random order
//assign the puzzle
//Generate the final value
//---------------------------------------//

const images = ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5', 'Number 6', 'Number 7', 'Number 8', 'Number 9'];
var copyImages = [];
var finalArray = [];

console.log(images);
function getImages() {

}


function randomizer() {

    //copy retrieved images into a temp array copy

    let i = 0;
    images.forEach(element => {
        copyImages[i] = element;
        i++;
    });

    //randomize original array

    for (var k = images.length - 1; k > 0; k--) {

        // Generate random number
        var j = Math.floor(Math.random() * (k + 1));

        var temp = images[k];
        images[k] = images[j];
        images[j] = temp;

    }
    // console.log(images);
}

//Calling random function

randomizer();

//Load to HTML page and assign functionality

function display() {

    //load elements to html

    for (i = 0; i <= images.length - 1; i++) {
        var passwordChoices = document.createElement('li');
        passwordChoices.innerHTML = images[i];
        // console.log(images[i]);
        document.getElementById("list").appendChild(passwordChoices)

        //Setting properties

        Object.assign(passwordChoices, {
            className: 'my-image-class',
            id: images[i],
            // src: ''
            height: 120, // pixels
            width: 160, // pixels
            onclick: function () {
                finalArray.push(this.id);
                console.log(finalArray);

            }
        })
    }

    //Add event listeners

    let choices = document.getElementsByClassName('list-items');
    // console.log('your choices are ' + choices);
}

display();

console.log(copyImages);
const submit = document.getElementById('submitBtn');
submit.addEventListener("click", () => {
    for(i = 0 ; i <= finalArray.length - 1 ; i++){

    if (finalArray == copyImages) {
            console.log('this is solved');
        }
        else {
            console.log("Wrong password");
        }

    }

 });
