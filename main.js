let state = {
  firstVal: "",
  secondVal: "",
  operation: undefined
};

let display = document.getElementById('display');

const buttonPressed = (value) => {
  if (state.operation == undefined) {
    state.firstVal = display.innerHTML += value;
    console.log(`1st`, state.firstVal);
    display.innerHTML = "";
    return state.firstVal;
  } else if (state.operation != undefined) {
    state.secondVal = display.innerHTML += value;
    console.log(`2nd`, state.secondVal);
    return state.secondVal;
  }
}

const operator = (value) => {
  console.log(`operator`);
  state.operation = !undefined;
  // do I want to display operator? If so:
  // display.innerHTML = value;
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

const equal = () => {
  console.log(`equal`);
}
