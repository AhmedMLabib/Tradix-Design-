let arrow = document.querySelector(".arrow");
let numbers = document.querySelectorAll(".achieve .content .text h2");

let animated = false;
window.onscroll = function () {
  // Appearing Arrow After Scrolling
  if (document.documentElement.scrollTop >= 600) {
    arrow.classList.remove("d-none");
  } else {
    arrow.classList.add("d-none");
  }
  // Increase Numbers After Scrolling
  if (
    document.documentElement.scrollTop >= 900 &&
    document.documentElement.scrollTop <= 1000 &&
    !animated
  ) {
    animated = true;
    counter(numbers[0], 62.5, 50);
    counter(numbers[1], 12.35, 10);
    counter(numbers[2], 50, 10);
    counter(numbers[3], 125, 5);
  }
};

function counter(el, time, counter) {
  let i = 0;
  let content = +el.innerHTML;
  let interval = setInterval(() => {
    el.innerHTML = i;
    i += counter;
    if (i > content) clearInterval(interval);
  }, time);
}
// Scroll To Top Onclick Arrow
arrow.onclick = () => {
  document.documentElement.scrollTo(0, 0);
};

let iconBar = document.querySelector("nav .content .list i");
let contentList = document.querySelector("nav .content .list .content");
// Show And Disappear Links List Onclick The Icon
iconBar.onclick = function () {
  if (contentList.classList.contains("d-none")) {
    contentList.classList.remove("d-none");
  } else {
    contentList.classList.add("d-none");
  }
};

let pricingMonth = document.querySelector(".pricing .mode .month");
let pricingYear = document.querySelector(".pricing .mode .year");
let pricingSpans = document.querySelectorAll(".pricing .cards .card p span");
// Basic Pricing Values Array
let pricingArr = [999, 2999, 1999];
pricingMonth.onclick = function () {
  pricingMonth.classList.add("active");
  pricingYear.classList.remove("active");
  // Write Prices In HTML Spans
  pricingSpans.forEach((span, index) => {
    span.innerHTML = `$${pricingArr[index]}`;
  });
};

pricingYear.onclick = function () {
  pricingYear.classList.add("active");
  pricingMonth.classList.remove("active");
  // Write Prices In HTML Spans After Adding
  pricingSpans.forEach((span, index) => {
    span.innerHTML = `$${pricingArr[index] * 9}`;
  });
};

// validate form

let inputs = document.querySelectorAll(".touch .form > div input");
let button = document.querySelector(".touch .form button");
button.onclick = function () {
  inputs.forEach((input) => {
    if (input.value === "") {
      input.nextElementSibling.classList.remove("d-none");
    } else {
      input.nextElementSibling.classList.add("d-none");
    }
  });
};
