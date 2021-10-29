// Map picker

/*
List of maps

SMALL
- Bleasdale Farmhouse
- Edgefield Stree House
- Grafton Farmhouse
- Ridgeview Road House
- Tanglewood Street House
- Willow Street House

MEDIUM
- Brownstone High School
- Maple Lodge Campsite
- Prison

LARGE
- Asylum
*/

isTesting = false;

function getRandomNumberBetween(minimum, maximum) {
    
    randomNumberSeed = Math.random();
    console.log("Random number seed: " + randomNumberSeed);
    
    randomNumber = Math.floor(randomNumberSeed * (maximum - minimum + 1) + minimum);
    console.log("Random number: " + randomNumber);

    return randomNumber;
}


if (isTesting) {
    minimum = 5;
    maximum = 10;
    
    console.log("Get random number between " + minimum + " and " + maximum);
    
    for (let i = 0; i < 10; i++)
    getRandomNumberBetween(minimum, maximum);
}
