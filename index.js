var readlineSync = require("readline-sync");
var chalk = require("chalk");
var userName = readlineSync.question("Hello! Let's check if your birthdate is a "+chalk.magenta("prime number.\n\nWhat's your name?\t"));
var userDob = readlineSync.question("Enter your date of birth in "+chalk.magenta("DD/MM") +" format:\t");

function calculatePrimeOrNot(userDob){
  if(userDob.length == 5 && userDob[2] == "/"){

  let dobString = userDob.toString();

  dobString = dobString.split("/");

  dobString = dobString.join("");

  let dobNumber = Number(dobString);
  console.log(dobNumber)
  var flag = null;
  for(let i = 2; i < dobNumber; i++){
    if(dobNumber % i == 0){
      flag = true;
      break;
    }
  }
  if(flag === true){
    console.log("\n"+chalk.magenta(userName) + ", Your birthdate is "+ chalk.red("NOT a prime number\n"));
  }
  else{
    console.log("\n"+chalk.magenta(userName) + ", Your birthdate"+chalk.green(" IS a prime number\n"));
  }
  }
  else{
    console.log(chalk.red("\nPlease enter valid date of format DD/MM\n"));
  }

}

calculatePrimeOrNot(userDob);
