let expression = "";
let resultShown = false;

// Switch between modes
document.getElementById("normal-btn").addEventListener("click", () => {
    document.getElementById("normal-calculator").style.display = "block";
    document.getElementById("scientific-calculator").style.display = "none";
    document.getElementById("graphic-calculator").style.display = "none";
});

document.getElementById("scientific-btn").addEventListener("click", () => {
    document.getElementById("normal-calculator").style.display = "none";
    document.getElementById("scientific-calculator").style.display = "block";
    document.getElementById("graphic-calculator").style.display = "none";
});

document.getElementById("graphic-btn").addEventListener("click", () => {
    document.getElementById("normal-calculator").style.display = "none";
    document.getElementById("scientific-calculator").style.display = "none";
    document.getElementById("graphic-calculator").style.display = "block";
});

// Function to handle button presses
function press(key) {
    if (resultShown) {
        expression = "";
        resultShown = false;
    }
    expression += key;
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    expression = "";
    updateDisplay();
}

// Function to delete the last character or a full function (e.g., sin(), tan(), sqrt())
function deleteLast() {
    if (expression.endsWith("sin(")) {
        expression = expression.slice(0, -4);
    } else if (expression.endsWith("tan(")) {
        expression = expression.slice(0, -4);
    } else if (expression.endsWith("sqrt(")) {
        expression = expression.slice(0, -5);
    } else {
        expression = expression.slice(0, -1);
    }
    updateDisplay();
}

// Function to evaluate the expression using Math.js
function calculate() {
    try {
        expression = math.evaluate(expression).toString();
        updateDisplay();
        resultShown = true; // Set flag indicating result is shown
    } catch (e) {
        expression = "Error";
        updateDisplay();
        resultShown = true;
    }
}

// Function to update the display
function updateDisplay() {
    const normalDisplay = document.getElementById("normal-display");
    const scientificDisplay = document.getElementById("scientific-display");

    if (document.getElementById("normal-calculator").style.display === "block") {
        normalDisplay.value = expression || "0";
    } else if (document.getElementById("scientific-calculator").style.display === "block") {
        scientificDisplay.value = expression || "0";
    }
}
