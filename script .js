let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        clearDisplay();
        alert("Invalid calculation");
    }
}
