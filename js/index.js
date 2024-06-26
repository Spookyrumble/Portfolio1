// import { postFormData } from "./utilities.js";
// import { showSuccessDialog } from "./utilities.js";
// // import { formErrorHander } from "./utilities.js";
// import { validateForm } from "./utilities.js";
// // formErrorHander();
// // validateForm();

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

const connect = document.querySelector("#connect");
connect.addEventListener("click", function () {
  const connect = document.querySelector(".connect");
  connect.scrollIntoView({ behavior: "smooth" });
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

// NAV MENU HANDLER. ADDED DUMMY CLASS TO REMOVE RELOAD ANIMATION TRIGGER.
const dialogMenu = document.querySelector("#navMenu");
const menuBtn = document.querySelector("#spookyMenuBtn");
menuBtn.addEventListener("click", function () {
  if (dialogMenu.classList.contains("dummy")) {
    dialogMenu.classList.remove("dummy");
    dialogMenu.classList.add("show");
  } else {
    dialogMenu.classList.toggle("show");
    dialogMenu.classList.toggle("hide");
  }
});

// CLOSE NAV MENU ON OFF-CLICK
document.addEventListener("click", function (event) {
  if (!dialogMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    if (
      dialogMenu.classList.contains("dummy") ||
      dialogMenu.classList.contains("hide")
    ) {
      return;
    } else {
      dialogMenu.classList.toggle("show");
      dialogMenu.classList.toggle("hide");
    }
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

const Indexconnect = document.querySelector("#Indexconnect");
Indexconnect.addEventListener("click", function () {
  const connect = document.querySelector(".connect");
  connect.scrollIntoView({ behavior: "smooth" });
});

const spookyLogoHome = document.querySelector("#spookyScrollHome");
spookyLogoHome.addEventListener("click", function () {
  const home = document.querySelector(".indexWindow");
  home.scrollIntoView({ behavior: "smooth" });
});

// FORM ERROR AND SUBMIT HANDLER
// const form = document.querySelector(".form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   if (validateForm()) {
//     showSuccessDialog();
//     postFormData(form);
//   }
// });

// // BTN CONFIRMATION SHADOW HANDLER
// form.addEventListener("input", function () {
//   const sendBtn = document.querySelector("#formBtn");
//   if (validateForm()) {
//     sendBtn.style.boxShadow = "0px 0px 25px yellowgreen";
//   } else {
//     sendBtn.style.boxShadow = "0px 0px 25px 5px var(--spookyRed)";
//   }
// });
