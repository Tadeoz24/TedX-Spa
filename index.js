const mobileNav = document.getElementById("mobile-nav");

function toggleMobileNav() {
  if (window.innerWidth > 1200) {
    mobileNav.classList.remove("display-n");
  } else {
    mobileNav.classList.add("display-n");
    document.getElementById("Header_main").style.backgroundColor = "black";
  }
  document.getElementById("Header_main").style.height = "82px";
}

/* 
    When the user scrolls down 50px from the top of the document, resize the header's font size
    and Color.
*/

function scrollFunction() {
  if (window.innerWidth > 1200) {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("Header_main").style.height = "62px";
      document.getElementById("Header_main").style.backgroundColor = "black";
    } else {
      document.getElementById("Header_main").style.height = "82px";
      document.getElementById("Header_main").style.backgroundColor =
        "rgba(0, 0, 0, 0.15)";
    }
  }
}

document
  .getElementById("scroll-top-btn")
  .addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.getElementById("scroll-top-btn").style.display = "block";
  } else {
    document.getElementById("scroll-top-btn").style.display = "none";
  }
});

document.getElementById("mobile-nav-dropdown").addEventListener("click", () => {
  if (mobileNav.classList.contains("display-n")) {
    mobileNav.classList.remove("display-n");
  } else {
    mobileNav.classList.add("display-n");
  }
});

window.addEventListener("resize", toggleMobileNav);
window.onload = () => toggleMobileNav();
window.onscroll = () => scrollFunction();
