let isOpen = false;
const menuIcon = document.querySelector(".menuIcon");

const openNav = () => {
  if (isOpen) {
    // close nav
    console.log("open");
    menuIcon.classList.remove("menuOpen");
    menuIcon.classList.add("menuClosed");
    isOpen = false;
  } else {
    // open nav
    menuIcon.classList.add("menuOpen");
    menuIcon.classList.remove("menuClosed");
    console.log("close");
    isOpen = true;
  }
};

menuIcon.addEventListener("click", () => openNav());
