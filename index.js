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
         
        console.log(randomLocation);
        return randomLocation;
}   



    //Random Restaurant Function
function chooseRestaurant(){ 
let restaurant = ['Family Diner', 'Cafe', 'Fancy Restaurant', 'Take Out', 'Street Food'];
let randomRestaurant = ' ';

let randomFood = restaurant[Math.floor(Math.random()*restaurant.length)];
    randomRestaurant += randomFood;
    
    console.log(randomRestaurant);
    return randomRestaurant;
}



    //Random Mode of Transportation Function
function chooseTransportation(){ 
    let transportation = ['Scooter', 'Taxi', 'Rented Car', 'Walk', 'Bus', 'Train'];
    let rdmTransResult = ' ';
    
    let tranSelect = transportation[Math.floor(Math.random()*transportation.length)];
        rdmTransResult += tranSelect;

        console.log(rdmTransResult);
        return rdmTransResult;
    }
    

    //Random Entertainment Function
function chooseEntertainment(){ 
    let entertainment = ['Concert', 'Musical', 'Night tour', 'Stand up comedy', 'Movie theater'];
    let entertainmentResult = ' ';
    
    let entertainmentSelect = entertainment[Math.floor(Math.random()*entertainment.length)];
        entertainmentResult += entertainmentSelect;

        console.log(entertainmentResult);
        return entertainmentResult;
    }
    

    // Re-selection function
    function selectChange() { 
        let changeDecision = prompt('Would you like to make any changes?');
        
            switch(changeDecision){
                 case 'yes'.toLowerCase() || 'Yes':
                    return reSelection();
        
                case 'no'.toLowerCase() || 'No':
                    return [];
            }
        }
        

    //User input reselection
   

function reSelection() {
let userInput = prompt('Put "1" to change Location, Put "2" to change Restaurant, Put "3" to change Transporation, Put "4" to change Entertainment,')
    
        switch(userInput){
            case "1":
                let location = chooseLocation();
                let newOtherLocation = [0, location];
                return newOtherLocation;
            case "2":
                let restaurant = chooseRestaurant();
                let newOtherRestaurant = [1, restaurant];
                return newOtherRestaurant;
            case "3":
                let transportation = chooseTransportation();
                let newOtherTransportation = [2, transportation];
                return newOtherTransportation;
            case "4":
                let entertainment = chooseEntertainment();
                let newOtherEntertainment = [3, entertainment];
                return newOtherEntertainment;
    }
} 

    //Confirm function
    function confirm() { 
        let confirmation = prompt('Are you satisfied with generator? Yes/No?');
    
        if(confirmation === 'Yes' || confirmation === 'yes'.toLowerCase()) {
            return false;
        }
        else if(confirmation === 'No' || confirmation === 'no'.toLowerCase()){
            return true;
        }
    }
    

    //Trip Result function
function funTrip() {
    let trip = [];

    let userLocation = chooseLocation();
    let userRestaraunt = chooseRestaurant();
    let userTransportation = chooseTransportation();
    let userEntertainment = chooseEntertainment();

    trip.push(userLocation);
    trip.push(userRestaraunt);
    trip.push(userTransportation);
    trip.push(userEntertainment);
    
    let i = true;
    
    while(i){
        
            //first output of randomize trip info
        console.log("Your location is" + '' + trip[0] + '.' + ' ' + "You're eating at:" + '' + trip[1] + '.' + ' ' + 'Your mode of transportation is' + '' + trip[2] + '.' + ' ' + 'Your entertainment is' + '' + trip[3] + '.' );
        
        let newSelectionChange  = selectChange();

        if(newSelectionChange !== []) {
            trip[newSelectionChange[0]] = newSelectionChange[1];
        }

        i = confirm(); 
    }
    
        //final output of trip info after changes are made
    console.log('Your location is' + '' + trip[0] + '.' + '' + " You're eating at:" + '' + trip[1] + '.' + ' ' + 'Your mode of transportation is' + '' + trip[2] + '.' + '' + 'Your entertainment is' + ' ' + trip[3] + '.' );
    
}

funTrip();