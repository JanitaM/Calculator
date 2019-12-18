let state = {
  firstVal: "",
  secondVal: "",
  operation: undefined
};

let display = document.getElementById('display');

let subtotal = "";

const buttonPressed = (value) => {
  if (value === "." && display.innerHTML.includes('.')) {
    return
  };

  if (subtotal !== "" && state.operation === undefined) {
    subtotal = "";
    state.firstVal = display.innerHTML = value;
    return state;
  }

  if (state.operation === undefined) {
    state.firstVal = display.innerHTML += value;
  } else if (state.operation !== undefined) {
    state.secondVal = display.innerHTML += value;
  }

  // console.log(`bp`, `state`, state, `sub`, subtotal);
  return state;
}

const operator = (value) => {
  display.innerHTML = "";

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    state.operation = value;
  }

  // console.log(`op`, `state`, state, `sub`, subtotal);
  return state;
}

const equal = (value) => {
  let num1 = Number(state.firstVal);
  let num2 = Number(state.secondVal);

  if (state.operation === "+") {
    subtotal = parseFloat(num1 + num2);
  } else if (state.operation === "-") {
    subtotal = parseFloat(num1 - num2);
  } else if (state.operation === "*") {
    subtotal = parseFloat(num1 * num2);
  } else if (state.operation === "/") {
    subtotal = parseFloat(num1 / num2);
  }

  display.innerHTML = subtotal;
  state.firstVal = subtotal;
  state.secondVal = "";
  state.operation = undefined;

  // console.log(`eq`, `state`, state, `sub`, subtotal);
  return subtotal;
}

const reset = () => {
  state.firstVal = "";
  state.secondVal = "";
  state.operation = undefined;
  display.innerHTML = state.firstVal;
  subtotal = "";
}

const backspace = () => {
  if (display.innerHTML === state.firstVal) {
    display.innerHTML = state.firstVal.slice(0, -1);
    state.firstVal = display.innerHTML;
  }

  if (display.innerHTML === state.secondVal) {
    display.innerHTML = state.secondVal.slice(0, -1);
    state.secondVal = display.innerHTML;
  }

  return state;
}

const negate = () => {
  let num1 = Number(state.firstVal);
  let num2 = Number(state.secondVal);

  if (display.innerHTML === state.firstVal && num1 < 0) {
    display.innerHTML = parseFloat(num1 * (1));
    state.firstVal = display.innerHTML;
  } else if (display.innerHTML === state.firstVal && num1 > 0) {
    display.innerHTML = parseFloat(num1 * (-1));
    state.firstVal = display.innerHTML;
  }

  if (display.innerHTML === state.secondVal && num2 < 0) {
    display.innerHTML = parseFloat(num2 * (1));
    state.secondVal = display.innerHTML;
  } else if (display.innerHTML === state.secondVal && num2 > 0) {
    display.innerHTML = parseFloat(num2 * (-1));
    state.secondVal = display.innerHTML;
  }

  // console.log('negate', `state`, state, `sub`, subtotal, display.innerHTML);
  return state;
}