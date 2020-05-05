"use strict";

function generate() {
    const values = {
        uppers: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ],
        lowers: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ],
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        special: [
            "!",
            "#",
            "$",
            "%",
            "&",
            "'",
            "(",
            ")",
            "*",
            "+",
            ",",
            "-",
            ".",
            "/",
            ":",
            ";",
            "<",
            "=",
            ">",
            "?",
            "@",
            "[",
            "]",
            "^",
            "_",
            "`",
            "{",
            "|",
            "}",
            "~",
            "'",
            '"',
        ],
    };

    let password = "";
    let uppers = values["uppers"];
    let lowers = values["lowers"];
    let digits = values["digits"];
    let special = vaules["special"];
    let length = document.getElementById("range").value;
    let boxLower = document.getElementById("lowercase");
    let boxUpper = document.getElementById("uppercase");
    let boxNum = document.getElementById("number");
    let boxSym = document.getElementById("symbols");

    if (boxUpper.checked === true) {
        allValues = allValues.concat(uppers)
    }

    if (boxLower.checked === true) {
        allValues = allValues.concat(lowers)
    }

    if (boxNum.checked === true) {
        allValues = allValues.concat(digits)
    }
    
    if (boxSym.checked === true) {
        allValues = allValues.concat(special)
    }

    if (length < 8 || length > 128) {
        alert("The password must be between 8 and 128 characters !")
    } else if (boxUpper.checked === false && boxLower.checked === false && boxNum.checked === false && boxSym.checked === false) {
        alert("You have to check at least one box !")
    } else {
        for (i = 0; i <= length; i++) {
            password = password + allValues[Math.floor(Math.random() * allValues.length)]
        }
    } 
    
    if (boxUpper.checked === true || boxLower.checked === true || boxNum.checked === true || boxSym.checked === true) {
        document.getElementById("box").value = password;
    }

    return password;
 
}



    ]



}
