const fs = require("fs");
const buffer = fs.readFileSync("Day1/Calories.txt");
const calories = buffer.toString();

let sumCal = 0;
let mostCal = 0;
let top3 = 0
let array_calories = [];

function mostCalories(){

    const elf = calories.split("\n")

    for (let i = 0; i < elf.length; i++) { 
        if(elf[i] === ""){ //|| i === (elf.length -1)
            array_calories.push(sumCal);
            sumCal = 0; 
        }else{
            sumCal += parseInt(elf[i]); 
        }
      }

    
      array_calories.sort(function(a, b){return b - a});
      mostCal = array_calories[0]
      top3 = array_calories[0] + array_calories[1] + array_calories[2];
      console.log("The elf carrying the most calories: " + mostCal)

      console.log("The total calories of the top 3 elves: " +  top3)
}

mostCalories();