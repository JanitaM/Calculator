let state = {
  firstVal: "",
  secondVal: "",
  operation: undefined
};

let display = document.getElementById('display');

const buttonPressed = (value) => {

  state.firstVal = display.innerHTML += value;
  // typeof state.firstVal is string
  console.log(state.firstVal);
  // console.log(state.secondVal);

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