//  Change Navbar Styles on Scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//  SHow Hide FAQ Answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    // Change Icon
    const icon = faq.querySelector(".faq__icon i");

    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// Show / Hide NAV Menu on Tablet and Smaller Devices

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const menuCloseBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menuCloseBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//  Close Nav Menu

const closeNav = () => {
  menu.style.display = "none";
  menuCloseBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

menuCloseBtn.addEventListener("click", closeNav);
