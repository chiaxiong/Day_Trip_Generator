// (5 points): As a developer, I want to make good, consistent commits.
// (5 points): As a user, I want a destination to be randomly selected for my day trip.
// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.
// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
// (10 points): As a user, I want to display my completed trip in the console.
// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
// Research:
// How to generate a random number in JavaScript?

//Random Location Function
function randomLocation(){

    let destination = ['Japan', 'Germany', 'Paris', 'Cancoon', 'Korean', 'England'];
    let randomLocation = ' ';

    let randomDesitination = destination[Math.floor(Math.random()*destination.length)];
    randomLocation += randomDesitination;

    console.log(randomLocation);
}   

randomLocation();

//Random Restaurant Function
function randomRestaurant(){ 
let restaurant = ['Family Diner', 'Cafe', 'Fancy Restaurant', 'Take Out', 'Street Food'];
let randomRestaurant = ' ';

let randomFood = restaurant[Math.floor(Math.random()*restaurant.length)];
    randomRestaurant += randomFood;

    console.log(randomRestaurant);
}

randomRestaurant();

//Random Mode of Transportation Function
function randomTransportation(){ 
    let transportation = ['Scooter', 'Taxi', 'Rented Car', 'Walk', 'Bus', 'Train'];
    let rdmTransResult = ' ';
    
    let tranSelect = transportation[Math.floor(Math.random()*transportation.length)];
        rdmTransResult += tranSelect;
    
        console.log(rdmTransResult);
    }
    
    randomTransportation();

//Random Entertainment Function

function rndEntertainment(){ 
    let entertainment = ['concert', 'musical', 'night tour', 'stand up comedy', 'movie theater'];
    let entertainmentResult = ' ';
    
    let entertainmentSelect = entertainment[Math.floor(Math.random()*entertainment.length)];
        entertainmentResult += entertainmentSelect;
    
        console.log(entertainmentResult);
    }
    
    rndEntertainment();

//
