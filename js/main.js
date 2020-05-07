const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks ul li');

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

const app = () => {
    navSlide();
}

app();