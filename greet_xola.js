//const greet = require('./greet');

//console.log(greet('Xola'))

const chalk = require('chalk');

const greet = require('./greet');

var msg = greet('Xola')

var figlet = require('figlet');
 
figlet(msg, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
console.log(data)

const styledMessage = chalk.bgBlue.black(data);
console.log(styledMessage)
});
