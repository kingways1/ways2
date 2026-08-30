const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

if (menuToggle && navList) {


menuToggle.addEventListener("click", () => {

    const isOpen = navList.classList.toggle("show");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen.toString()
    );

});


}
