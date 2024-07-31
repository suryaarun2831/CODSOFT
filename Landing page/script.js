const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};
const scrollRevealLeftOption = {
    distance:"50px",
    origin:"left",
    duration:1000,
};

ScrollReveal().reveal(".Home h1",scrollRevealOption);
ScrollReveal().reveal(".Home h4",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".Home .home-btn",{
    ...scrollRevealLeftOption,
    delay:1000,
});

ScrollReveal().reveal(".About_us h1",scrollRevealOption);
ScrollReveal().reveal(".About_us p  ",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".About_us .btn",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".Discover p",scrollRevealOption);
ScrollReveal().reveal(".Discover .places",{
    ...scrollRevealOption,
    delay:500,
});

document.querySelectorAll('.footer_des i').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.classList.add(this.getAttribute('data-filled'));
        this.classList.remove(this.classList[0]);
    });

    icon.addEventListener('mouseleave', function() {
        this.classList.add(this.classList[0].replace('-fill', '-line'));
    });
});

