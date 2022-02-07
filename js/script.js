// Add a click event to the button that disables the button and starts a counter.

// Count to 7 and update span.count with the value of the count.

// Once 7 is reached stop the count and enable the button.

let counter = 0;
const button = document.querySelector("button");
const countContainer = document.querySelector(".count");

button.onclick = function () {
  event.target.classList.add("button-class");

  const intervalfunk = setInterval(function () {
    counter++;
    countContainer.innerHTML = counter;

    if (counter > 7) {
      button.classList.remove("button-class");
      clearInterval(intervalfunk);
      counter = 0;
      countContainer.innerHTML = counter;
    }
  }, 1000);
};
