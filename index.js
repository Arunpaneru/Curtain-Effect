window.addEventListener("load", () => {
  // Selecting the SVG to create the timeline
  const svg = document.getElementById("svg");
  const tl = gsap.timeline();

  // SVG paths for animation
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  // Animate heading text
  tl.from(".loader-wrap-heading h1", {
    // delay: 1,
    y: 200,
    skewY: 10,
  })
    .to(".loader-wrap-heading h1", {
      delay: 1.5,
      y: -200,
      skewY: 10,
      ease: "power2.in",
    })
    // Animate SVG path to curve and then flatten
    .to(svg, {
      duration: 0.8,
      attr: { d: curve },
      ease: "power2.in",
    })
    .to(svg, {
      duration: 0.8,
      attr: { d: flat },
      ease: "power2.out",
    })
    .set(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });

  const button = document.querySelectorAll("button");
  button.forEach((btn) =>
    btn.addEventListener("click", () => {
      console.log("button clicked");
    })
  );
});
