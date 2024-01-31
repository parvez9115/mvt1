document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  // Check if the page is refreshed
  if (performance.navigation.type === 1) {
    // If refreshed, set the hash to "home"
    window.location.hash = "home";
  }

  // Check the initial scroll position and update the header background
  updateHeaderBackground();

  // Listen for scroll events
  window.addEventListener("scroll", function () {
    // Update the header background on scroll
    updateHeaderBackground();
  });
});

function updateHeaderBackground() {
  var header = document.querySelector(".header");

  // Check if the page has been scrolled
  if (window.scrollY > 0) {
    // If scrolled, change the background color to black
    header.style.backgroundColor = "black";
  } else {
    // If at the top of the page, make the background transparent
    header.style.backgroundColor = "transparent";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "225px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function changeUrlWithoutHash(newUrl) {
  window.history.replaceState({}, document.title, newUrl);
}
var typed = new Typed("#element", {
  strings: ["Esim Documentation"],
  typeSpeed: 150,
});

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toggleSubMenu(subMenuId) {
  var subMenu = document.getElementById(subMenuId);

  // Toggle the display of the submenu
  if (subMenu.style.display === "none" || subMenu.style.display === "") {
    subMenu.style.display = "block";
  } else {
    subMenu.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("sidebar").style.left = "0";
  } else {
    document.getElementById("sidebar").style.left = "-250px";
  }
}
