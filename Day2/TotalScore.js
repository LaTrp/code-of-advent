const fs = require("fs");
const buffer = fs.readFileSync("Day2/Input.txt");
const score = buffer.toString();

let opponentInput;
let myInput;
let totalScore = 0; 

const elf = score.split("\n")

console.log(elf[elf.length -1].charAt(0));
console.log(elf[elf.length -1].charAt(2));

for (let i = 0; i < elf.length; i++) {
    opponentInput = elf[i].charAt(0)
    myInput = elf[i].charAt(2)

    if(opponentInput === "A"){
        opponentInput = "Rock"; 
    }
    if(opponentInput === "B"){
        opponentInput = "Paper"; 
    }
    if(opponentInput === "C"){
        opponentInput = "Scissors"; 
    }

    if(myInput === "X"){
        myInput = "Rock"; 
    }
    if(myInput === "Y"){
        myInput = "Paper"; 
    }
    if(myInput === "Z"){
        myInput = "Scissors"; 
    }


    if(opponentInput === myInput){
        //Draw
        totalScore += 3; 
        if(myInput === "Rock"){
            totalScore += 1;
        }
        if(myInput === "Paper"){
            totalScore += 2;
        }
        if(myInput === "Scissors"){
            totalScore += 3;
        }
    }else if(opponentInput === "Rock"){
        if(myInput === "Paper"){
            //Won
            totalScore += 8;
        }else{
            //Loss
            totalScore += 3;
        }
    }else if(opponentInput === "Paper"){
        if(myInput === "Scissors"){
            //Won
            totalScore += 9;
        }else{
            //Loss
            totalScore += 1;
        }
    }else if(opponentInput === "Scissors"){
        if(myInput === "Rock"){
            //Won
            totalScore += 7;
        }else{
            //Loss
            totalScore += 2;
        }
    }
}


console.log(totalScore);

