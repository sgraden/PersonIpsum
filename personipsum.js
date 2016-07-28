'use strict';

const readline = require('readline');
var person;

var goodList = ['is great!', 'is amazing!', 'is so cool.', 'is the best person ever.', 'much awesome, such great',
                'we <3', 'is a beast.'];
var badList = ['is just the worst.', 'smells really bad.', 'isn\'t good at stuff!', 'needs to see a stylist.',
                'should get that checked out.'];

var chosenList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateSentences(person, length) {
    for (var i = 0; i < length; i++) {
        var rand = Math.floor(Math.random() * chosenList.length);
        console.log(person + ' ' + chosenList[rand]);
    }
}

function numberOfSentences(person) {
    rl.question('How many sentences do you want? ', (answer) => {
        var length = parseInt(answer);
        if (typeof length === 'number' && answer > 0) {
            console.log('Generating ' + length + ' sentences...');
            generateSentences(person, parseInt(length));
        }
        rl.close();
    });
}

function goodOrBad (person) {
    rl.question('Do you want to say <good> or <bad> things about ' + person + '? ', (answer) => {
        if (answer === 'good') {
            chosenList = goodList;
        } else {
            chosenList = badList;
        }
        numberOfSentences(person, chosenList);
    });
}

function who () {
    rl.question('Who do you want to talk about? ', (answer) => {
        person = answer;
        goodOrBad(person);
    });
}





who(); //Starts everything
