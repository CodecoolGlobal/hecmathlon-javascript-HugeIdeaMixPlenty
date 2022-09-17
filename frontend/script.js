function loadEvent() {
  const HECMATHLON = {
    getMaxValue: (input) => {
      return input.split(",").reduce((acc, val) => (val > acc ? val : acc));
    },
    getGreaterThan: (input) => {
      return greaterValues.filter(
        (element) => element > input && element <= 10
      );
    },
    fizzBuzz: (input) => {
      const start = 1;
      let startArray = [...Array(input - start + 1).keys()].map(
        (x) => x + start
      );
      return startArray.map((element) =>
        element % 5 === 0 && element % 3 === 0
          ? "FizzBuzz"
          : element % 3 === 0
          ? //wenn keine else condition, das gibts nicht bei ternary
            "Fizz"
          : element % 5 === 0
          ? "Buzz"
          : element
      );
    },
  };

  const maxValueBtn = document.querySelector(".maxValue__btn");
  const greaterThanBtn = document.querySelector(".greaterThan__btn");
  const fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

  const maxValueInput = document.querySelector(".maxValue__input");
  const greaterThanInput = document.querySelector(".greaterThan__input");
  const fizzBuzzInput = document.querySelector(".fizzBuzz__input");

  const maxValueRoot = document.querySelector(".maxValue__container");
  const greaterThanRoot = document.querySelector(".greaterThan__container");
  const fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

  let greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getOutput = (output) => [
    "The function starts",
    ...output,
    "The function ends",
  ];

  const logResult = (place, values) => {
    while (place.firstChild) {
      place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
      place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
  };

  maxValueBtn.addEventListener("click", () => {
    let maxValue = getOutput(HECMATHLON.getMaxValue(maxValueInput.value));
    logResult(maxValueRoot, maxValue);
  });
  greaterThanBtn.addEventListener("click", () => {
    let greaterValues = getOutput(
      HECMATHLON.getGreaterThan(greaterThanInput.value)
    );
    logResult(greaterThanRoot, greaterValues);
  });
  fizzBuzzBtn.addEventListener("click", () => {
    let result = getOutput(HECMATHLON.fizzBuzz(fizzBuzzInput.value));
    logResult(fizzBuzzRoot, result);
  });
}
window.addEventListener("load", loadEvent);
