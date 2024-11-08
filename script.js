let currentOperation = '';
let displayValue = '0';

function updateDisplay() {
    document.getElementById('operation-display').innerText = currentOperation;
    document.getElementById('display').innerText = displayValue;
}

function appendSymbol(symbol) {
    if (displayValue === '0' && symbol !== '.') {
        displayValue = symbol;
    } else {
        displayValue += symbol;
    }
    currentOperation += symbol;
    updateDisplay();
}

function chooseOperator(operator) {
    // Avoid double operators
    if (currentOperation.endsWith('+') || currentOperation.endsWith('-') || 
        currentOperation.endsWith('*') || currentOperation.endsWith('/')) {
        currentOperation = currentOperation.slice(0, -1);
    }
    currentOperation += operator;
    displayValue = ''; // Reset displayValue for the next number
    updateDisplay();
}

function calculate() {
    try {
        displayValue = String(eval(currentOperation)); // Evaluate the full operation
        currentOperation = displayValue; // Show result as the new starting point
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentOperation = '';
    displayValue = '0';
    updateDisplay();
}

function backspace() {
    currentOperation = currentOperation.slice(0, -1);
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}

// Additional Scientific Functions
function calculateSquareRoot() {
    currentOperation += '√';
    displayValue = String(Math.sqrt(parseFloat(displayValue)));
    updateDisplay();
}

function calculateSquare() {
    currentOperation += '^2';
    displayValue = String(Math.pow(parseFloat(displayValue), 2));
    updateDisplay();
}

function calculateLog() {
    currentOperation += 'log';
    displayValue = String(Math.log10(parseFloat(displayValue)));
    updateDisplay();
}

function calculateExp() {
    currentOperation += 'exp';
    displayValue = String(Math.exp(parseFloat(displayValue)));
    updateDisplay();
}

function calculateTrig(func) {
    const radians = parseFloat(displayValue) * (Math.PI / 180); // Convert to radians for trig functions
    displayValue = String(Math[func](radians));
    currentOperation += func + '(' + displayValue + ')';
    updateDisplay();
}

updateDisplay();
