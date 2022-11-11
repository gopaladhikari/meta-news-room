//Slicing sub heading section
let thirdSecHeading = document.getElementsByClassName("third-sec-heading");

if (innerWidth < 768) {
  for (let i = 0; i < thirdSecHeading.length; i++) {
    thirdSecHeading[i].innerHTML.length > 60
      ? (thirdSecHeading[i].innerHTML =
          thirdSecHeading[i].innerHTML.slice(0, 59) + "...")
      : thirdSecHeading[i].innerHTML;
  }
}

//Input box section
let input = document.querySelector(".input").value;
let btn = document.querySelector(".clear");

const clickHandler = () => {
  document.querySelector(".input").value = null;
};

// toggling FAQ for mobile
let toggleListHeader = document.querySelectorAll(".toggle-list-header");
let toggleList = document.querySelectorAll(".toggle-list");
let footerIcon = document.querySelectorAll(".mobile-footer-icon");

for (let i = 0; i < toggleListHeader.length; i++) {
  toggleListHeader[i].addEventListener("click", () => {
    toggleList[i].classList.toggle("show-list");
    footerIcon[i].classList.toggle("header-container");
  });
}
