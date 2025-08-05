var tl = gsap.timeline()

tl.from ("a",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.2
}
)
tl.from ("h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
}
)

tl.from("h4",{
    y:-20,
    duration:0.2,
    opacity:0
})


tl.from ("h5",{
    y:-20,
    opacity:0,
    duration:0.2,
    stagger:0.25
}
)
