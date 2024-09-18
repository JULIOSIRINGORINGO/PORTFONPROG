let currentCard = 0;
const totalCards = 3;
const cards = document.querySelectorAll(".card-container");

function updateCarousel() {
  cards.forEach((card, index) => {
    let state = "";
    if (index === currentCard) {
      state = "center"; // Card in the center (active)
    } else if (index === (currentCard + 1) % totalCards) {
      state = "right"; // Card to the right (inactive, blurred)
    } else {
      state = "left"; // Card to the left (inactive, blurred)
    }
    card.setAttribute("data-state", state);
  });
}

function prev() {
  currentCard = (currentCard - 1 + totalCards) % totalCards;
  updateCarousel();
}

function next() {
  currentCard = (currentCard + 1) % totalCards;
  updateCarousel();
}

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      document.querySelector(`header nav a[href='#${id}']`).classList.add("active");
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtnText = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");
});
