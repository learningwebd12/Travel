var tl = gsap.timeline();
tl.from(".right", {
  stagger: 0.4,
  x: -1000,
  opacity: 0,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});
tl.from(".left", {
  stagger: 0.4,
  x: 1000,
  opacity: 0,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});
tl.from(".left img", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});
tl.from("header a", {
  stagger: 0.4,
  z: 0,
  opacity: 0,
  duration: 0.1,
  delay: 0,
  ease: "power2.easeInOut",
});
tl.from(".two", {
  stagger: 0.4,
  z: 0,
  opacity: 0,
  duration: 0.1,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".hover", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  delay: 0,
  ease: "power2.easeInOut",
});
tl.from(".hovers", {
  y: -100,
  opacity: 0,
  duration: 0.4,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".right h1", {
  stagger: 0.5,
  y: 100,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  ease: "power2.easeInOut",
});

tl.from(
  ".right p",
  {
    stagger: 0.5,
    y: 110,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "Power2.easeInOut",
  },
  "-=1.5"
);

tl.from(
  ".two-button",
  {
    stagger: 0.5,
    y: 120,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "Power2.easeInOut",
  },
  "-=1.5"
);

tl.from(".all-people", {
  stagger: 0.5,
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.1,
  ease: "power2.easeInOut",
});
