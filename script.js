// ===============================
// MOBILE NAVIGATION
// ===============================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close mobile menu after clicking a link

    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}
