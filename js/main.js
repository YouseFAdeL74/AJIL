// toggle
let myToggle = document.querySelector(".navbar-toggler");
let icon = document.querySelector(".fa-bars");

myToggle.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
})

// OnScrol Add Class to Navbar
let myNavbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  myNavbar.classList.toggle("add-class", window.scrollY > 0);
});


window.onscroll = () => {
  if (window.scrollY >= myNavbar.offsetTop) {
    if (myNavbar.classList.contains("bg-white")) {
      myNavbar.classList.remove("bg-white");
    } else if (myNavbar.offsetTop === 0) {
      myNavbar.classList.add("bg-white");
    }
  }
  if (window.scrollY >= myStates.offsetTop) {
    if (!started) {
      mySpans.forEach((span) => myCounter(span));
    }
    started = true;
  }
}
// Counter Nums
let myStates = document.querySelector(".states");
let mySpans = document.querySelectorAll(".states .box .edit");
let started = false;

function myCounter(el) {
  let count = el.dataset.count;
  let thisCounter = setInterval(() => {
    el.textContent++
    if (el.textContent === count) {
      clearInterval(thisCounter)
    }
  }, 3000 / count)
}


let myLinks = document.querySelectorAll(".nav-link");
let myBoxes = document.querySelectorAll(".edit-box");

myLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    myLinks.forEach((el) => {
      el.classList.remove("active");
    })
    e.target.classList.add("active");
  });
});
