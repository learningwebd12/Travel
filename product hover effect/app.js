var tl = gsap.timeline();

tl.from(".main-images1", {
  y: -200,
  opacity: 1,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".main-images2", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".main-images4", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".main-images3", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  delay: 0,
  ease: "power2.easeInOut",
});
