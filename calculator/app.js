let num = "";
let num2 = "";

let calculate = "";
let result = 0;
let equation = document.getElementById("showNum");

const numOne = () => {
    if (calculate === "") {
        num += "1";
        equation.innerHTML = num;
    }
    else {
        num2 += "1";
        equation.innerHTML = num2;
    }
}

const numTwo = () => {
    if (calculate === "") {
        num += "2";
        equation.innerHTML = num;
    }
    else {
        num2 += "2";
        equation.innerHTML = num2;
    }
}

const numThree = () => {
    if (calculate === "") {
        num += "3";
        equation.innerHTML = num;
    }
    else {
        num2 += "3";
        equation.innerHTML = num2;
    }
}

const numFour = () => {
    if (calculate === "") {
        num += "4";
        equation.innerHTML = num;
    }
    else {
        num2 += "4";
        equation.innerHTML = num2;
    }
}

const numFive = () => {
    if (calculate === "") {
        num += "5";
        equation.innerHTML = num;
    }
    else {
        num2 += "5";
        equation.innerHTML = num2;
    }
}

const numSix = () => {
    if (calculate === "") {
        num += "6";
        equation.innerHTML = num;
    }
    else {
        num2 += "6";
        equation.innerHTML = num2;
    }
}

const numSeven = () => {
    if (calculate === "") {
        num += "7";
        equation.innerHTML = num;
    }
    else {
        num2 += "7";
        equation.innerHTML = num2;
    }
}

const numEight = () => {
    if (calculate === "") {
        num += "8";
        equation.innerHTML = num;
    }
    else {
        num2 += "8";
        equation.innerHTML = num2;
    }
}

const numNine = () => {
    if (calculate === "") {
        num += "9";
        equation.innerHTML = num;
    }
    else {
        num2 += "9";
        equation.innerHTML = num2;
    }
}

const numZero = () => {
    if (calculate === "") {
        num += "0";
        equation.innerHTML = num;
    }
    else {
        num2 += "0";
        equation.innerHTML = num2;
    }
}

window.addEventListener("keydown", (e) => keyPress(e));
const keyPress = (e) => {
    if (e.key === "+") {
        add();
    }
    else if (e.key === "-") {
        sub();
    }
    else if (e.key === "*") {
        multi();
    }
    else if (e.key === "/") {
        divide();
    }
    else if (e.key === "Enter") {
        equals();
    }
    else if (e.key !== "+", "-", "/", "*", "Enter" && calculate === "") {
        num += e.key;
        equation.innerHTML = num;
    }
    else if (e.key !== "+", "-", "/", "*", "Enter" && calculate !== "") {
        num2 += e.key;
        equation.innerHTML = num2;
    }
}

const add = () => {
    calculate = "add";
}

const sub = () => {
    calculate = "sub";
}

const multi = () => { 
    calculate = "multi";
}

const divide = () => {
    calculate = "divide";
}

const equals = () => {
    if (calculate === "add") {
        result = Number(num) + Number(num2);
        equation.innerHTML = result;
    }
    else if (calculate === "sub") {
        result = Number(num) - Number(num2);
        equation.innerHTML = result;
    }
    else if (calculate === "multi") {
        result = Number(num) * Number(num2);
        equation.innerHTML = result;
    }
    else if (calculate === "divide") {
        result = Number(num) / Number(num2);
        equation.innerHTML = result;
    }
}

const clears = () => {
    num = num2 = "";
    calculate = "";
    result = "";
    equation.innerHTML = 0;
}