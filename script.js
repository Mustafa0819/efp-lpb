/*
let min, max, number, message;

min = 10;
max = 20;
message = "Entrez un nombre entre " + min + " et " + max;

number = prompt("Entrez un nombre entre 10 et 20");

while (number < min || number > max) {

    if (number > max) {
        console.log("Plus petit!");
    } else {
        console.log("Plus grand!");
    }
    
    number = prompt(message);
} $ */



/*
let number, max;

number = parseInt(prompt("Entrez un nombre"));
max = number + 10;

while (number <= max) {
    console.log(number);
    number++;
} */




/*
let number, numberDisplay, i;

i = 1;

number = parseInt(prompt("Entrez un nombre pour voir sa table de multiplication"));
numberDisplay = number;

while (i <= 10) {
    number = numberDisplay * i;
    console.log(`${numberDisplay} x ${i} = ${number}`)
    i++
} */



/*
let userInput, i, number;

i = 1;
userInput = parseInt(prompt("Entrez un nombre"));
number = userInput;

while (i < userInput) {
    number += i;
    i++;
}
console.log(number); */


/*
let userInput, i, number;

i = 1;
userInput = parseInt(prompt("Entrez un nombre"));
number = userInput;

while (i < userInput) {
    number *= i;
    i++;
}
console.log(number);
*/



/*
let number, biggestNumber, i;

i = 1;
biggestNumber = 0;

while (i < 4) {    
    number = parseInt(prompt("Entrez le nombre numéro " + i));

    if (number > biggestNumber) {
        biggestNumber = number;
    }

    i++
}

console.log("Le plus grand de ces nombres est: " + biggestNumber); */



/*
let number, biggestNumber, i;

i = 1;
biggestNumber = 0;

while (number != 0) {    
    number = parseInt(prompt("Entrez le nombre numéro " + i + "(Entrez 0 si vous voulez arrêter la boucle)"));

    if (number > biggestNumber) {
        biggestNumber = number;
    }

    i++
}

console.log("Le plus grand de ces nombres est: " + biggestNumber); */




let price, totalPrice, userPayment;
totalPrice = 0;
userPayment = 0;

while (price != 0) {
    price = parseInt(prompt("Entrer le prix pour vo(s) article(s) (Entrer 0 pour arrêter)"));

    totalPrice += price;
}

userPayment = prompt("Voici votre total: " + totalPrice + "€ combien allez vous payer?");
console.log(userPayment);