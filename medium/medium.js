// madlib function

function madlib(name, subject) {
    return (`${name}'s favorite subject in school is ${subject}`);
}

// tip calculator

function tipCalc(amount, service) {
    if (service === 'good') {
        tip = amount * .2
        total = amount + tip;
    } else if (service === 'fair') {
        tip = amount * .15
        total = amount + tip;
    } else {
        tip = amount * .1
        total = amount + tip;
    }
    console.log(`Your tip amount is ${tip}`);
    return(`Your total is ${total}`);
}

// print numbers

function printNumbers(num1, num2) {
    let x;
    for (x = num1; x <= num2; x++) {
        console.log(x)
    }
}

// print square

function printSquare(num) {
    let x;
    let y;
    let string = '*';
    for (x = 1; x <= num; x++) {
        console.log(string.repeat(num));
    }
}

// print empty box

function printBox(width, height) {
    let string = '*';
    let blank = ' '
    let x;
    for (x = 1; x <= height; x++) {
        if (x === 1) {
            console.log(string.repeat(width))
        } else if (x === width) {
            console.log(string.repeat(width))
        } else {
            console.log(string + (blank.repeat(width-2)) + string);
        }
    }
}

// print a banner

function printBanner(string) {
    const stringLength = string.length;
    const bannerLength = stringLength + 4;
    console.log("-".repeat(bannerLength))
    console.log(`- ${string} -`)
    console.log("-".repeat(bannerLength))
}

// Leetspeak

function leetSpeak(string) {
    let lowString = string.toLowerCase();
    let newString = '';
    for (letter in string) {
        if (lowString[letter] === 'a') {
            newString += 4;
        } else if (lowString[letter] === 'e') {
            newString += 3
        } else if (lowString[letter] === 'g') {
            newString += 6;
        } else if (lowString[letter] === 'i') {
            newString += 1;
        } else if (lowString[letter] === 'o') {
            newString += 0;
        } else if (lowString[letter] === 's') {
            newString += 5;
        } else if (lowString[letter] === 't') {
            newString += 7;
        } else {
            newString += lowString[letter];
        }
    }
    return newString;
}

// long vowels

function longVowels(string) {
    const lowString = string.toLowerCase();
    let newString = '';
    let i;
    for (i = 0; i < lowString.length; i++) {
        if (lowString[i] === lowString[i + 1]) {
            newString += lowString[i].repeat(5);
            i++
        } else {
            newString += lowString[i];
        }
    }
    return newString;
}

// just te positives

function onlyPositives(array) {
    let posArr = [];
    let i;
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            posArr.push(array[i]);
        } else {
            null;
        }
    }
    return posArr;
}

// Caeser Cipher 

function cipher(string, shift) {
    let encodeStr = "";
    for (letter in string) {
        if 
        let newPos = string.charCodeAt(letter) + shift;
        encodeStr += String.fromCharCode(newPos);
    }
    return encodeStr;
}

function decipher(string, shift) {
    let decodeStr = "";
    for (letter in string) {
        let newPos = string.charCodeAt(letter) - shift;
        decodeStr += String.fromCharCode(newPos);
    }
    return encodeStr;
}

console.log(cipher("Genius without education is like silver in the mine", 13));
// console.log(decipher(""))