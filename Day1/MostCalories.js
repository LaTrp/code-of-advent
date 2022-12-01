const fs = require("fs");
const buffer = fs.readFileSync("Day1/Calories.txt");
const calories = buffer.toString();

let sumCal = 0;
let mostCal = 0;
let elf1 = 0;
let elf2 = 0;
let elf3 = 0; 

function mostCalories(){

    const elf = calories.split("\n")

    for (let i = 0; i < elf.length; i++) {
        if(elf[i] === ""){
            if(sumCal > mostCal){
                mostCal = sumCal;
            }
            sumCal = 0; 
        }else{
            sumCal += parseInt(elf[i]); 
        }

        


      }
      console.log(mostCal)
}

mostCalories();