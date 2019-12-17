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

  /* if (subtotal !== "" && state.operation === undefined) {
    display.innerHTML = "";
    state.firstVal = "";
  } */

  // Best version so far
  if (state.operation === undefined) {
    state.firstVal = display.innerHTML += value;
  } else if (state.operation !== undefined) {
    state.secondVal = display.innerHTML += value;
  }

  /* something in here works
    if (subtotal !== "" && state.firstVal !== "") {
      display.innerHTML = "";
      state.firstVal = display.innerHTML = +value;
      state.secondVal = "";
      state.operation = undefined;
      console.log(`inside 2ndval`, state, subtotal);
    }
    // need an else if? 

   return state;
  } */

  console.log(`bp`, state, subtotal);

  return state;
}

const operator = (value) => {
  display.innerHTML = "";

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    state.operation = value;
  }

  console.log(`op`, state);
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

  console.log(`eq`, state, subtotal);

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
  // this only works once and for firstVal only
  display.innerHTML = state.firstVal.slice(0, (state.firstVal.length - 1));

  return state;
}

const negate = () => {
  // this works but only at the start
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

  console.log('negate', state.firstVal, state.secondVal);

  return state;
}