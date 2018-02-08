function game() {
  // Define the size of the game play area
  var maxX = 10;
  var maxY = 10;

  // User starts at 0,0
  var userX = 0;
  var userY = 0;

  // Hide the treasure, in a random location
  var treasureX = Math.floor(Math.random() * 11);
  var treasureY = Math.floor(Math.random() * 11);
  
  // Calculate the initial distance from 0,0 to the treasure
  var distanceToTreasure = 999;
  distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure, treasureFound);

  console.log("The treasure is at X: " + treasureX + " and Y: " + treasureY);
  console.log("Current distance to treaure: " + distanceToTreasure);

  // Check status of locating treasure

  var treasureFound = false;

  // Get user's name

  var name = prompt("Welcome brave adventurer! What are you called?");
  console.log("Nice to meet you " + name);

  // Start the while loop and execute until the treasure is found
  while(!treasureFound){
    var direction = prompt("Which direction would you like to go in? (north, south, east, west)");
    console.log(direction);

    // Initialize temporary variables to hold new location for validation
    var newX;
    var newY;

    // Check the user input and execute the same follow up functions for each direction.  The only difference is which coordinate (X or Y) is updated
    if(direction == "north") {
      newX = userX;
      newY = userY + 1;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure, treasureFound);

    }else if(direction == "east"){
      newX = userX + 1;
      newY = userY;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure, treasureFound);
      
    }else if(direction =="south"){
      newX = userX;
      newY = userY - 1;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure, treasureFound);
      
    }else if(direction == "west") {
      newX = userX - 1;
      newY = userY;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure, treasureFound);

    // If the user input does not match an allowed value, warn the user and skip this iteration
    }else {
      console.log("please enter a real direction");
    }
    console.log("X, Y:" +userX + "," +userY);
    
    //If the distance to the treasure is 0 change the status of treasureFound in order to end the loop
    if(distanceToTreasure == 0){
      treasureFound = true;
    }
    }
  }

// Check that the new coordinates are within the game board
function checkCoordinates(newX, newY, maxX, maxY, userX, userY){
  if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
    return [newX, newY];
  }else {
    console.log("There is a forbidding mountain range in that direction, you cannot go");
    return [userX, userY];
  }
}

// Determine if the current move puts the player closer to or further away from the treasure and inform the user.  Also update the grid the user moved into this turn
function compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure, treasureFound){
  if(distanceToTreasure == 999){    
    return Math.sqrt(Math.pow(treasureX - userX, 2) + Math.pow(treasureY - userY, 2));
  }else {
    newDistance = Math.sqrt(Math.pow(treasureX - userX, 2) + Math.pow(treasureY - userY, 2));
  }
  if(newDistance < distanceToTreasure && newDistance != 0) {
    console.log("You are getting closer to the treature!");
    
    tableId = userX + "," + userY;
    document.getElementById(tableId).classList.add("green");
    
    return newDistance;
  }else if(newDistance == 0 && userX == treasureX && userY == treasureY){
      console.log("You found the treasure!");
      tableId = userX + "," + userY;
      document.getElementById(tableId).classList.add("gold");
    
      return newDistance
  }else {
    console.log("You are going the wrong way!");
    
    tableId = userX + "," + userY;
    document.getElementById(tableId).classList.add("green");
    
    return newDistance;
  }
}