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
  } return state;
}

const equal = (value) => {
  // can I still access state here? yes
  console.log(`eq`, state);

  // // can I still access state here? yes but is it needed?
  let num1 = Number(state.firstVal);
  let num2 = Number(state.secondVal);
  // console.log(`num1`, num1, `num2`, num2);

  if (state.operation === "+") {
    // can I still access state here? yes
    console.log(`v`, num1, num2);

    subtotal = parseFloat(num1 + num2);
    console.log(`sub`, subtotal);

    display.innerHTML = subtotal;

  } return subtotal;


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
