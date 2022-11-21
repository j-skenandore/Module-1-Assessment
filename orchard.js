///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//Creating initial variable that I will be adding to while counting the acres.

let totalAcres = 0

//Running a for loop through each different acre array and adding the value of each index to the total Acres variable

for (i = 0; i < fujiAcres.length; i++) {
    totalAcres = fujiAcres[i] + totalAcres
}

for (i = 0; i < galaAcres.length; i++) {
    totalAcres = galaAcres[i] + totalAcres
}

for (i = 0; i < pinkAcres.length; i++) {
    totalAcres = pinkAcres[i] + totalAcres
}

//Logging the totalAcres value to find the total amount of acres worked.

// While working on problem 5 I didn't like that the numbers printing out in terminal seemed random so I added context
// to each console log.

console.log("Total acres worked: " +  totalAcres)





// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres / 7

console.log("Average acres worked per day: " + averageDailyAcres)





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// Created a while loop that says as long as there are any acres left to work then work will happen 
// that day and the total amount of acres will be decreased by the average amount of acres typically 
// worked in a day. How many days it takes to complete this work is added up as well.

while (acresLeft > 0) {
    acresLeft = acresLeft - averageDailyAcres;
    days = days + 1
}

console.log("It would take " + days + " days to work 174 acres")





// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// Initialized each variable as a type of array so that I may later push the daily amounts of tonnage picked after calculating

let fujiTons = []
let galaTons = []
let pinkTons = []

// Calculating daily tonnage and pushing the amounts into the arrays created above.

for ( i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5)
} console.log("Fuji Apples picked per day in tons: " + fujiTons)

for (i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * 6.5)
} console.log("Gala Apples picked per day in tons: " + galaTons)

for (i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * 6.5)
} console.log("Pink Apples picked per day in tons: " + pinkTons)





// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// Initialized total pounds per apple with a value of 0

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

// Calculated the amount of tonnage picked per day and added it to the total amount of pounds picked for each
// value in the arrays.

for (i = 0; i < fujiTons.length; i++) {
    fujiPounds = fujiTons[i] * 2000
} console.log("Pounds of Fuji Apples picked per week: " + fujiPounds)

for (i = 0; i < galaTons.length; i++) {
    galaPounds = galaTons[i] * 2000
} console.log("Pounds of Gala Apples picked per week: " + galaPounds)

for (i = 0; i < pinkTons.length; i++) {
    pinkPounds = pinkTons[i] * 2000
} console.log("Pounds of Pink Apples picked per week: " + pinkPounds)





// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("Fuji Apples create an income of $" + fujiProfit + " per week.")
console.log("Gala Apples create an income of $" + galaProfit + " per week.")
console.log("Pink Apples create an income of $" + pinkProfit + " per week.") //Why does this one give an obscure decimal?




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log("For one week I have a total income of $" + totalProfit + " before expenses.... AND I HAVE FINISHED MY FIRST ASSESSMENT!!!!!")
