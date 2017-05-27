var rover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
    switch(rover.direction) {
      case 'N':
        rover.position[0]++;
        if (rover.position[0] > 10) {
          rover.position[0] = 0;
        }
        break;
      case 'E':
        rover.position[1]++;
        if (rover.position[1] > 10) {
          rover.position[1] = 10;
        }
        break;
      case 'S':
        rover.position[0]--;
        if (rover.position[0] > 10) {
          rover.position[0] = 0;
        }
        break;
      case 'W':
        rover.position[1]--;
        if (rover.position[1] > 10) {
          rover.position[1] = 0;
        }
        break;
    }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBackward(rover) {
    switch(rover.direction) {
      case 'N':
        rover.position[0]--;
        if (rover.position[0] > 10) {
          rover.position[0] = 0;
        }
        break;
      case 'E':
        rover.position[1]--;
        if (rover.position[1] > 10) {
          rover.position[1] = 0;
        }
        break;
      case 'S':
        rover.position[0]++;
        if (rover.position[0] > 10) {
          rover.position[0] = 0;
        }
        break;
      case 'W':
        rover.position[1]++;
        if (rover.position[1] > 10); {
          rover.position[1] = 0;
      }
        break;
    }
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goLeft(rover) {
    switch(rover.direction) {
      case 'N':
        rover.direction = "W";
        break;
      case 'E':
        rover.direction = "N";
        break;
      case 'S':
        rover.direction = "E";
        break;
      case 'W':
        rover.direction = "S";
        break;
    }
    console.log("New Rover Direction: [" + rover.direction + "]");
  }

function goRight(rover) {
    switch(rover.direction) {
      case 'N':
        rover.direction = "E";
        break;
      case 'E':
        rover.direction = "S";
        break;
      case 'S':
        rover.direction = "W";
        break;
      case 'W':
        rover.direction = "N";
        break;
    }
    console.log("New Rover Direction: [" + rover.direction + "]");
}

function whereIsRover() {
   console.log("Current Rover Position : ["+ rover.position[0] + ", " + rover.position[1] + "]");
   console.log("Current Rover Direction: [" + rover.direction + "]");
}

whereIsRover();

function move() {
    var text = document.getElementById("Move the Rover").value;
}

// use the above to get input via button and prompt

function move() {
  var move = prompt("Explore Mars with your rover! Move forward, backward, left or right! 'f (foward), b (backward), l (left) or r (right).");

  var roverMove = move.split("");

  for (var i = 0; i < roverMove.length; i++) {
    if (roverMove[i] == 'f') {
      goForward(rover);
    }

    else if (roverMove[i] == 'b') {
      goBackward(rover);
    }

    else if (roverMove[i] == 'l') {
      goLeft(rover);
    }

    else if (roverMove[i] == 'r') {
      goRight(rover);
    }

    else {
      alert('Error');
      return move();
    }
  }
}

move();


//  would be better to display final postion & direction here (outside of the console)
