window.onload = () => {
    const navigation = document.getElementById("navigation");
    const navText = document.getElementById("nav-text");
    const dropdownMenuLink = document.getElementById("dropdown-menu-link");



    window.addEventListener("scroll", () => {
        if (window.scrollY > 120) {
            navigation.classList.add("fixed");
        } else {
            navigation.classList.remove("fixed");
        }
    });

    window.addEventListener("resize", () => {
        if (screen.width > 575) {
            navText.classList.remove("responsive");
        }
    });

    dropdownMenuLink.onclick = () => {
        if (navText.classList.contains("responsive")) {
            navText.classList.remove("responsive");
        } else {
            navText.classList.add("responsive");
        }
    };

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
};