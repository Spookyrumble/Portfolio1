import { postFormData } from "./utilities.js";
import { showSuccessDialog } from "./utilities.js";
import { formErrorHander } from "./utilities.js";
import { validateForm } from "./utilities.js";
formErrorHander();
validateForm();

// NAV MENU BUTTON HANDLERS
const scrollPort = document.querySelector("#portF");
scrollPort.addEventListener("click", function () {
  const portfolio = document.querySelector(".portfolio");
  portfolio.scrollIntoView({ behavior: "smooth" });
  dialogMenu.classList.toggle("show");
  dialogMenu.classList.toggle("hide");
});

const about = document.querySelector("#about");
about.addEventListener("click", function () {
  const about = document.querySelector(".spookyBanner");
  about.scrollIntoView({ behavior: "smooth" });
  dialogMenu.classList.toggle("show");
  dialogMenu.classList.toggle("hide");
});

const contact = document.querySelector("#contact");
contact.addEventListener("click", function () {
  const contact = document.querySelector(".contact");
  contact.scrollIntoView({ behavior: "smooth" });
  dialogMenu.classList.toggle("show");
  dialogMenu.classList.toggle("hide");
});

const toTop = document.querySelector("#spookyScrollTop");
toTop.addEventListener("click", function () {
  const home = document.querySelector(".indexWindow");
  home.scrollIntoView({ behavior: "smooth" });
  dialogMenu.classList.toggle("show");
  dialogMenu.classList.toggle("hide");
});

// NAV MENU HANDLER.
const dialogMenu = document.querySelector("#navMenu");
const menuBtn = document.querySelector("#spookyMenuBtn");
menuBtn.addEventListener("click", function () {
  if (!dialogMenu.classList.contains("hide")) {
    dialogMenu.classList.add("show");
  } else {
    dialogMenu.classList.remove("show");
    dialogMenu.classList.add("hide");
  }
});

// CLOSE NAV MENU ON OFF-CLICK
document.addEventListener("click", function (event) {
  if (
    !dialogMenu.contains(event.target) &&
    !menuBtn.contains(event.target) &&
    dialogMenu.classList.contains("show")
  ) {
    dialogMenu.classList.remove("show");
    dialogMenu.classList.add("hide");
  }
});

// INDEX BTN HANDLERS
const indexPortF = document.querySelector("#indexPortF");
indexPortF.addEventListener("click", function () {
  const portfolio = document.querySelector(".portfolio");
  portfolio.scrollIntoView({ behavior: "smooth" });
});

const IndexAbout = document.querySelector("#IndexAbout");
IndexAbout.addEventListener("click", function () {
  const about = document.querySelector(".spookyBanner");
  about.scrollIntoView({ behavior: "smooth" });
});

const IndexContact = document.querySelector("#IndexContact");
IndexContact.addEventListener("click", function () {
  const contact = document.querySelector(".contact");
  contact.scrollIntoView({ behavior: "smooth" });
});

const spookyLogoHome = document.querySelector("#spookyScrollHome");
spookyLogoHome.addEventListener("click", function () {
  const home = document.querySelector(".indexWindow");
  home.scrollIntoView({ behavior: "smooth" });
});

// FORM ERROR AND SUBMIT HANDLER
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    showSuccessDialog();
    postFormData();
  }
});
