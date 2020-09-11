"use strict"

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
function chooseLocation(){
    let destination = ['Japan', 'Germany', 'Paris', 'Cancoon', 'Korean', 'England'];
    let randomLocation = ' ';

    let randomDesitination = destination[Math.floor(Math.random()*destination.length)];
        randomLocation += randomDesitination;
                
        return randomLocation;
}   



    //Random Restaurant Function
function chooseRestaurant(){ 
let restaurant = ['Family Diner', 'Cafe', 'Fancy Restaurant', 'Take Out', 'Street Food'];
let randomRestaurant = ' ';

let randomFood = restaurant[Math.floor(Math.random()*restaurant.length)];
    randomRestaurant += randomFood;
        
    return randomRestaurant;
}



    //Random Mode of Transportation Function
function chooseTransportation(){ 
    let transportation = ['Scooter', 'Taxi', 'Rented Car', 'Walk', 'Bus', 'Train'];
    let rdmTransResult = ' ';
    
    let tranSelect = transportation[Math.floor(Math.random()*transportation.length)];
        rdmTransResult += tranSelect;
    
        return rdmTransResult;
    }
    

    //Random Entertainment Function
function chooseEntertainment(){ 
    let entertainment = ['Concert', 'Musical', 'Night tour', 'Stand up comedy', 'Movie theater'];
    let entertainmentResult = ' ';
    
    let entertainmentSelect = entertainment[Math.floor(Math.random()*entertainment.length)];
        entertainmentResult += entertainmentSelect;
    
        return entertainmentResult;
    }
    

    //Confirm function
// function confirm() { 
//     let confirmation = prompt('Confirm results? Yes/No?');

//     if(confirmation === 'yes'.toUpperCase() || confirmation === 'yes'.toLowerCase()) {
        
//     }
//     else if(confirmation === 'no'.toUpperCase() || confirmation === 'no'.toLowerCase()){
//         console.log('You have canceled your results.')
//     }
// }


    //Trip Result function
function funTrip() {
    let trip = [];

    let userLocation = chooseLocation();
    let userRestaraunt = chooseRestaurant();
    let userTransportation = chooseTransportation();
    let userEntertainment = chooseEntertainment();

        trip += userLocation + userRestaraunt + userTransportation + userEntertainment;
    
        // if(changeDecision === 'yes'.toUpperCase() || changeDecision === 'yes'.toLowerCase()) {
        //     switch(userInput)
        // }
        // else {
        //     funTrip();
        // }

    // let decisionChange = prompt('Would you like to make any changes?');
    
    //     if(decisionChange = 'yes'){
    //         userInput;
    //     }
    //     else {
    //         console.log(funtrip());
    //     }

    let userInput = prompt('Put "1" to change Location, Put "2" to change Restaurant, Put "3" to change Transporation, Put "4" to change Entertainment,')
    
        switch(userInput){
            case "1":
                console.log('Your new locations is' + chooseLocation());
                break;
            case "2":
                console.log('Your new dine is' + chooseRestaurant());
                break;
            case "3":
                console.log('Your new transportation is' + chooseTransportation());
                break;
            case "4":
                console.log('Your new entertainment is' + chooseEntertainment());
            break;
    }
    
    // confirm();
    // console.log('Your location is' + '' + chooseLocation() + '.' + '' + ' Your eating at:' + '' + chooseRestaurant() + '.' + '' + 'Your mode of transportation is' + '' + chooseTransportation() + '.' + '' + 'Your entertainment is' + '' + chooseEntertainment + '.' );
    //after confirminng, print everything from trip

}

funTrip();