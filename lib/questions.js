const colorKeywords = require('./colorKey.js')

const questions = [
    // ***SHAPE***
    {
        name: 'shape',
        message: 'LOGO SHAPE: Chose desired shape',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // ****SHAPE COLOR***
    
    {
        name: 'shapeColorChoice',
        message: 'SHAPE COLOR: Choose a color format: ',
        type: 'list',
        choices: ['Color Keyword', 'Hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter the shape color keyword",
        when: (answers) => {
            if(answers.shapeColorChoice === 'Color Keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid Color Keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shapeColorChoice === 'Hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid Hexadecimal")
            }
            return true;
        }
    },

    // ***TEXT***
    // validate user can only submit 3 characters
    {
        name: 'text',
        message: 'TEXT: Enter up to (3) characters',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

    // ***TEXT COLOR***
    // user choose color keyword or hexadecimal for textColor
    {
        name: 'textColorChoice',
        message: 'TEXT COLOR: Choose a color format: ',
        type: 'list',
        choices: ['Color Keyword', 'Hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter the text color keyword",
        when: (answers) => {
            if(answers.textColorChoice === 'Color Keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid Color Keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.textColorChoice === 'Hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid Hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;