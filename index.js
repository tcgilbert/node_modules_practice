const datefns = require('date-fns');
const myModule = require("./myModule.js");
const chalk = require("chalk");
const figlet = require('figlet');

// deliverable pt. 1
for (let i = 0; i < myModule.length; i++) {
    console.log(myModule[i]);
}

// date-fns
const dateArray = [
    new Date(1994, 11, 16),
    new Date(2030, 11, 16),
    new Date(2015, 12, 16),
];

//month is 0 indexed btw
const today = new Date();
const closestDate = datefns.closestTo(today, dateArray);
console.log(datefns.format(closestDate, 'MM/dd/yyyy'));

//chalk
console.log(chalk.underline.bold.blue("this was the closest date to today from the date array"));

//figlet
figlet('Thomas Gilbert', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});