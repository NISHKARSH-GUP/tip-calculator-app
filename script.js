// IDs of tags in the html code, refer to it on line 25, 57 and 61

let billInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let numberOfPeoplediv = document.getElementById('numberOfPeople');
let perPersonTotal = document.getElementById('perPersonTotal');


// this converts the input of the numberOfPeoplediv in numbers
let numberOfPeople = Number(numberOfPeoplediv.innerText);

const calculateBill = () => {
    let bill = Number(billInput.value); // this takes in the input of billInput and converts it into a number
    let tipPercent = Number(tipInput.value)/100; // this takes in the input of tipInput variable and converts it into a numebr as well as a percentage value by dividing it by 100
    let totalTipAm = bill * tipPercent; // calculates the tip amount by multiplying bill and tip percentage 
    let totalAmount = bill + totalTipAm; // calculates the total amount including the billed amount as well as the tip amount
    let perPersonAmount = totalAmount/numberOfPeople; // calculates the amount each person has to pay by diving the total amount by the no. of people
    perPersonTotal.innerText = `₹${perPersonAmount.toFixed(2)}`; // updates the value of total per person on the site, actively. Fixed to decimal places
}

const increasePeople = () => {
    numberOfPeople++; // increase the number of people by 1 at one click
    numberOfPeoplediv.innerText = numberOfPeople; // updates the number of people on the website
    calculateBill();
}

const decreasePeople = () => {
    if(numberOfPeople == 1){
        alert("You can't go below 1!");
        return 
    } else {
        numberOfPeople--; // decrese the number of people by 1 at one click
        numberOfPeoplediv.innerText = numberOfPeople; // updates the number of people on the website
    } 
    calculateBill();
}
