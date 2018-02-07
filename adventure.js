function game() {
  // Define the size of the game play area

  var maxX = 10;
  var maxY = 10;

  // User starts at 0,0

  var userX = 0;
  var userY = 0;

  // Hide the treasure

  var treasureX = Math.floor(Math.random() * 11);
  var treasureY = Math.floor(Math.random() * 11);
  
  var distanceToTreasure = 999;
  distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure)

  console.log("The treasure is at X: " + treasureX + "and Y: " + treasureY);
  console.log("Current distance to treaure: " + distanceToTreasure);

  // Check status of locating treasure

  var treasureFound = false;

  // Get user's name

  var name = prompt("Welcome brave adventurer! What are you called?");
  console.log("Nice to meet you " + name);

  while(!treasureFound){
    var direction = prompt("Which direction would you like to go in? (north, south, east, west)");
    console.log(direction);

    var newX;
    var newY;

    // see what new user location should be

    //check if new user location is within the grid

    // check if new user location is treasure

    if(direction == "north") {
      newX = userX;
      newY = userY + 1;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure)

    }else if(direction == "east"){
      newX = userX + 1;
      newY = userY;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure)
      
    }else if(direction =="south"){
      newX = userX;
      newY = userY - 1;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure)
      
    }else if(direction == "west") {
      newX = userX - 1;
      newY = userY;

      newCoordinates = checkCoordinates(newX, newY, maxX, maxY, userX, userY);
      userX = newCoordinates[0];
      userY = newCoordinates[1];
      
      distanceToTreasure = compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure)

    }else {
      console.log("please enter a real direction");
    }
    console.log("X, Y:" +userX + "," +userY);  
    }
  }
}
function checkCoordinates(newX, newY, maxX, maxY, userX, userY){
  if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
    return [newX, newY];
  }else {
    console.log("There is a forbidding mountain range in that direction, you cannot go");
    return [userX, userY];
  }
}

function compareLocationToTreasure(userX, userY, treasureX, treasureY, distanceToTreasure) {
  if(distanceToTreasure == 999) {    
    return Math.sqrt(Math.pow(treasureX - userX, 2) + Math.pow(treasureY - userY, 2))
  } else {
    newDistance = Math.sqrt(Math.pow(treasureX - userX, 2) + Math.pow(treasureY - userY, 2))
  }
  if(newDistance < distanceToTreasure && newDistance != 0) {
    console.log("You are getting closer to the treature!")
    return newDistance
  } else if(newDistance == 0 && userX == treasureX && userY == treasureY){
      console.log("You found the treasure!");
      treasureFound = true;
      return newDistance
  } else {
    console.log("You are going the wrong way!")
    return newDistance
  }
  
  
}

