/**
 * Toggles the visibility of the menu when the toggle button is clicked.
 * @param {string} toggleId - The ID of the toggle button element.
 * @param {string} navId - The ID of the navigation menu element.
 */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");



/**
 * Performs a hide/show action upon clicking a menu link.
 */
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  
  navMenu.classList.remove("show-menu");
}
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) => n.addEventListener("click", linkAction));


/**
 * Sets the active link in the url after the click on navigation menu.
 */
function scrollActive() {
  const sections = document.querySelectorAll("section[id]");

  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);


/**
 * Sets the visibility of the scroll-to-top button based on the scroll position.
 */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/**
 *  Code related to the theme switcher.
 */
const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// previously selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

/** 
 * Activate / deactivate the theme manually with the button
 */
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
