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

  if (state.operation === undefined) {
    state.firstVal = display.innerHTML += value;
  } else if (state.operation !== undefined) {
    display.innerHTML = "";
    state.secondVal = display.innerHTML += value;
  }

  console.log(`bp`, state);
  return state;
}

const operator = (value) => {
  // can I still access state? yes
  console.log(`op`, state);

  display.innerHTML = "";

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    state.operation = value;
  }
}

const equal = (value) => {
  // can I still access state here? yes
  console.log(`eq`, state);

  // cannot access state here
  let state.firstVal = num1;
  let state.secondVal = num2;

  if (value === "+") {
    // cannot access state here
    console.log(`v`, num1, num2);

    subtotal = parseFloat(state.firstval) + parseFloat(state.secondVal);

    console.log(`sub`, subtotal);

    display.innerHTML = subtotal;

  } return display.innerHTML;
}

const reset = () => {
  state.firstVal = "";
  state.secondVal = "";
  state.operation = undefined;
  display.innerHTML = state.firstVal;
}

const backspace = () => {
  // this only works once and for firstVal only
  display.innerHTML = state.firstVal.slice(0, (state.firstVal.length - 1));
}
