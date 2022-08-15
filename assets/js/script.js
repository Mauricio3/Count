let subtrair = document.getElementById("subtrair");
let adicionar = document.getElementById("adicionar");
let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

subtrair.addEventListener("click", decrement);
adicionar.addEventListener("click", increment);

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber <= 0)
        currentNumberWrapper.style.color = "red";
    else
        currentNumberWrapper.style.color = "black";

}

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 10) {
        adicionar.ATTRIBUTE_NODE = disable;
    }
    if (currentNumber < 0)
        currentNumberWrapper.style.color = "red";
    else if (currentNumber >= 0)
        currentNumberWrapper.style.color = "black";
}
