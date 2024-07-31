const scrollRevealOptionBottom={
    distance:'50px',
    origin:'bottom',
    duration:1000
};
const scrollRevealOptionLeft={
    distance:'50px',
    origin:'left',
    duration:1000
};
const scrollRevealOptionRight={
    distance:'50px',
    origin:'right',
    duration:1000
};
const scrollRevealOptionTop={
    distance:'50px',
    origin:'top',
    duration:1000
};
ScrollReveal().reveal(".home_p1", scrollRevealOptionBottom);
ScrollReveal().reveal(".home_p2",
    {
        ...scrollRevealOptionBottom,
        delay:200
    }
); 
ScrollReveal().reveal(".home_p3", 
    {
        ...scrollRevealOptionBottom,
        delay:300
    }
);
ScrollReveal().reveal(".btn", 
    {
        ...scrollRevealOptionLeft,
        delay:300
    }
);
ScrollReveal().reveal(".header a",scrollRevealOptionBottom);
ScrollReveal().reveal(".navbar a",
{
    ...scrollRevealOptionBottom,
    delay:500
});
ScrollReveal().reveal(".About .wordings h1",scrollRevealOptionLeft);
ScrollReveal().reveal(".Skills .skills",scrollRevealOptionTop);
ScrollReveal().reveal(".Project .project-container",scrollRevealOptionBottom);
ScrollReveal().reveal(".p4",scrollRevealOptionLeft);
ScrollReveal().reveal(".p5",scrollRevealOptionLeft);
ScrollReveal().reveal(".p1",scrollRevealOptionTop);
ScrollReveal().reveal(".copyright",scrollRevealOptionBottom);