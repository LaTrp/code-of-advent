const fs = require("fs");
const buffer = fs.readFileSync("Day1/Calories.txt");
const calories = buffer.toString();

let sumCal = 0;
let mostCal = 0;

function mostCalories(){

    const elf = calories.split("\n")
    let sums = elf[5];

    console.log(sums)

    for (let i = 0; i < elf.length; i++) {
        if(elf[i] === "" || i === (elf.length -1)){
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