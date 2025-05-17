const svg = document.querySelector("svg.Path");
const path = svg.querySelector("path");

const scroll = () => {
  const distance = window.scrollY;
  const totalDistance = svg.clientHeight - window.innerHeight;

  const percentage = distance / totalDistance;

  const pathLength = path.getTotalLength();

  path.style.strokeDasharray = `${pathLength}`;
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
};

scroll();
window.addEventListener("scroll", scroll);

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector("svg.Path");
  const path = svg.querySelector("path");
  const pathLength = path.getTotalLength();

  // Create mask elements
  const svgNS = "http://www.w3.org/2000/svg";
  const mask = document.createElementNS(svgNS, "mask");
  mask.id = "path-reveal-mask";

  // Create and set up the mask path
  const maskPath = path.cloneNode();
  maskPath.setAttribute("stroke", "white");
  maskPath.setAttribute("stroke-dasharray", pathLength);
  maskPath.setAttribute("stroke-dashoffset", pathLength);

  // Add elements to the SVG
  mask.appendChild(maskPath);
  svg
    .insertAdjacentElement("afterbegin", document.createElementNS(svgNS, "defs"))
    .appendChild(mask);

  // Apply the mask to the original path
  path.setAttribute("mask", "url(#path-reveal-mask)");

  // Update mask on scroll
  function updateOnScroll() {
    const scrollProgress = Math.min(
      Math.max(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 0),
      1
    );
    maskPath.setAttribute("stroke-dashoffset", pathLength - scrollProgress * pathLength);
  }

  // Initialize and add listener
  updateOnScroll();
  window.addEventListener("scroll", updateOnScroll);
});
