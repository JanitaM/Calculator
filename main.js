// Clear all values at the start
let state = {
  firstVal: "",
  secondVal: "",
  operation: undefined
};

// Save the display text to a variable for quicker access
let display = document.getElementById('display');
// Subtotal at the start is empty
let subtotal = "";

const buttonPressed = (value) => {
  // Allow only one period per display
  if (value === "." && display.innerHTML.includes('.')) {
    return
  };

  // Save the pressed numbers into the correct key:value of state
  if (state.operation === undefined) {
    display.innerHTML = state.firstVal += value;
  } else if (state.operation !== undefined && state.firstVal !== "") {
    subtotal = "";
    display.innerHTML = state.secondVal += value;
  }

  // If there's a subtotal and a number is pressed, save the value to state.firstVal
  if (subtotal !== "" && state.operation === undefined) {
    state.firstVal = display.innerHTML = value;
    return state;
  }

  return state;
}

const operator = (value) => {
  // If any of these values are pressed, save the value to state.operation
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    state.operation = value;
  }

  return state;
}

const equal = (value) => {
  // Get the values from state and save them to number variables
  let num1 = Number(state.firstVal);
  let num2 = Number(state.secondVal);

  // Do the operation that matches the current state.operation, turn the string into a floating point number
  if (state.operation === "+") {
    subtotal = parseFloat(num1 + num2);
  } else if (state.operation === "-") {
    subtotal = parseFloat(num1 - num2);
  } else if (state.operation === "*") {
    subtotal = parseFloat(num1 * num2);
  } else if (state.operation === "/") {
    subtotal = parseFloat(num1 / num2);
  }

  // Set the display value to subtotal for future use
  display.innerHTML = subtotal;
  // Set the state.firstVal to subtotal to start a new operation
  state.firstVal = subtotal;
  // Clear the value of state.secondVal
  state.secondVal = "";
  // Clear the value of state.operation
  state.operation = undefined;

  return subtotal;
}

const reset = () => {
  // Clear all values
  state.firstVal = "";
  state.secondVal = "";
  state.operation = undefined;
  display.innerHTML = state.firstVal;
  subtotal = "";
}

const backspace = () => {
  // If the display is on state.firstVal, remove one number/string off the end
  if (display.innerHTML === state.firstVal) {
    display.innerHTML = state.firstVal.slice(0, -1);
    state.firstVal = display.innerHTML;
  }

  // If the display is on state.secondVal, remove one number/string off the end
  if (display.innerHTML === state.secondVal) {
    display.innerHTML = state.secondVal.slice(0, -1);
    state.secondVal = display.innerHTML;
  }

  return state;
}

const negate = () => {
  // Get the values from state and save them to number variables
  let num1 = Number(state.firstVal);
  let num2 = Number(state.secondVal);

  // If the current state.firstVal is less than 0, times by negative 1 to make it positive. If it's greater than 0, times by 1 to make it negative.
  if (display.innerHTML === state.firstVal && num1 > 0) {
    display.innerHTML = parseFloat(num1 * (-1));
    state.firstVal = display.innerHTML;
  } if (display.innerHTML === state.firstVal && num1 < 0) {
    display.innerHTML = parseFloat(num1 * (1));
    state.firstVal = display.innerHTML;
  }

  // Do the same for state.secondVal
  if (display.innerHTML === state.secondVal && num2 > 0) {
    display.innerHTML = parseFloat(num2 * (-1));
    state.secondVal = display.innerHTML;
  } else if (display.innerHTML === state.secondVal && num2 < 0) {
    display.innerHTML = parseFloat(num2 * (1));
    state.secondVal = display.innerHTML;
  }

  // Do the same for subtotal
  if (subtotal < 0) {
    display.innerHTML = parseFloat(display.innerHTML * (-1));
    subtotal = display.innerHTML;
    state.firstVal = subtotal;
  } else if (subtotal > 0) {
    display.innerHTML = parseFloat(display.innerHTML * (1));
    subtotal = display.innerHTML;
    state.firstVal = subtotal;
  }

  return state;
}