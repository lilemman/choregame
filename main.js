
let doorImage1=document.getElementById("door1");
let doorImage2=document.getElementById("door2");
let doorImage3=document.getElementById("door3");
let startButton=document.getElementById("start");  
const botDoorPath="https://content.codecademy.com/projects/chore-door/images/robot.svg"

const beachDoorPath="https://content.codecademy.com/projects/chore-door/images/beach.svg"  

const spaceDoorPath="https://content.codecademy.com/projects/chore-door/images/space.svg"
const closedDoorPath="https://content.codecademy.com/projects/chore-door/images/closed_door.svg"

let numClosedDoors=3;
let openDoor1, openDoor2,openDoor3;
let currentPlaying=true;

const isBot = (door) => {
    if(door.src === botDoorPath) {
      return true;
    } else {
      return false;
  }
}

const isClicked = door => {
    if (door.src === closedDoorPath) {
     return false;
   } else {
     return true;
     }
   }

const playDoor=(door)=>{
    numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  }else if (isBot(door)==true){
      gameOver('lose');

  }
  }
  const randomChoreGenerator=()=>{
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 0) {
      openDoor1=botDoorPath;
      openDoor2=beachDoorPath;
      openDoor3=spaceDoorPath;
    } else if (choreDoor === 1) { 
     openDoor2=botDoorPath;
      openDoor1=beachDoorPath;
      openDoor3=spaceDoorPath;
    } 
    else{
      openDoor3=botDoorPath;
       openDoor2=spaceDoorPath;
      openDoor1=beachDoorPath;
    }
}
doorImage1.onclick =()=>{
        if(currentPlaying && !isClicked(doorImage1)) {
      
      doorImage1.src=openDoor1;
      playDoor(doorImage1);
      }
      };

      doorImage2.onclick=()=>{
        if(currentPlaying && !isClicked(doorImage2)){

        
        
      doorImage2.src=openDoor2;
      playDoor(doorImage2);
      }
    }
    doorImage3.onclick=()=>{
        if(currentPlaying && !isClicked(doorImage3)){
      
        doorImage3.src=openDoor3;
        playDoor(doorImage3);
      }
      
    }
      
      const startRound=()=>{
          doorImage1.src=closedDoorPath;
          doorImage2.src=closedDoorPath;
          doorImage3.src=closedDoorPath;
          numClosedDoors=3;
          currentPlaying=true;
          startButton.innerHTML='Good luck';
          randomChoreGenerator();
      }
      startButton.onclick = () => {
        if(!currentPlaying)
        startRound();
      }
    

const gameOver=(status)=>{
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
      }else {
        startButton.innerHTML = 'Game over! Play again?'
      }
      currentlyPlaying=false;
}

startRound();


    
