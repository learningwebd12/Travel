var tl = gsap.timeline();

tl.to(".spinner", {
  opacity: 0,
  duration: 1,
  delay: 1,
});
tl.to(".extra", {
  y: -2000,
  duration: 0.8,
});

tl.to(".Nextextra", {
  y: -2000,
  duration: 0.8,
});

tl.from(".logo", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.3,
});

tl.from("li a", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from(".header-btn", {
  y: -30,
  opacity: 0,
  duration: 0.5,
});

tl.from(".main-h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
});

tl.from(".pasag", {
  y: 20,
  opacity: 0,
});
tl.from(".students-img", {
  y: 20,
  opacity: 0,
});
tl.from(".students-text", {
  y: 20,
  opacity: 0,
});

tl.from(".getstarted", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".first", {
  x: -50,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

gsap.from(".second", {
  y: -50,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

gsap.from(".third", {
  y: 50,
  duration: 1,
  repeat: -1,
  yoyo: true,
});
