function displayTailwindBreakPointsIndicators() {
  const containerDiv = document.createElement("div");
  containerDiv.style.position = "fixed";
  containerDiv.style.bottom = "2.5rem";
  containerDiv.style.left = "2.5rem";

  const sizes = ["XS", "SM", "MD", "LG", "XL", "2XL"];

  sizes.forEach((size) => {
    const span = document.createElement("span");
    span.id = `indicator_${size.toLowerCase()}`;
    span.style.display = "none";
    span.style.backgroundColor = "white";
    span.style.border = "2px solid black";
    span.style.fontFamily = "Arial, sans-serif";
    span.style.color = "black";
    span.style.fontSize = "1rem";
    span.style.borderRadius = "8px";
    span.style.padding = "1rem";
    span.innerText = size;
    containerDiv.appendChild(span);
  });

  document.body.appendChild(containerDiv);

  const INDICATOR_XS = document.getElementById("indicator_xs");
  const INDICATOR_SM = document.getElementById("indicator_sm");
  const INDICATOR_MD = document.getElementById("indicator_md");
  const INDICATOR_LG = document.getElementById("indicator_lg");
  const INDICATOR_XL = document.getElementById("indicator_xl");
  const INDICATOR_2XL = document.getElementById("indicator_2xl");

  const BREAKPOINT_SM = 640;
  const BREAKPOINT_MD = 768;
  const BREAKPOINT_LG = 1024;
  const BREAKPOINT_XL = 1280;
  const BREAKPOINT_2XL = 1536;

  function updateIndicators() {
    const windowWidth = window.innerWidth;

    if (windowWidth < BREAKPOINT_SM) {
      INDICATOR_XS.style.display = "block";
      INDICATOR_SM.style.display = "none";
    } else if (windowWidth < BREAKPOINT_MD) {
      INDICATOR_XS.style.display = "none";
      INDICATOR_SM.style.display = "block";
      INDICATOR_MD.style.display = "none";
    } else if (windowWidth < BREAKPOINT_LG) {
      INDICATOR_SM.style.display = "none";
      INDICATOR_MD.style.display = "block";
      INDICATOR_LG.style.display = "none";
    } else if (windowWidth < BREAKPOINT_XL) {
      INDICATOR_MD.style.display = "none";
      INDICATOR_LG.style.display = "block";
      INDICATOR_XL.style.display = "none";
    } else if (windowWidth < BREAKPOINT_2XL) {
      INDICATOR_LG.style.display = "none";
      INDICATOR_XL.style.display = "block";
      INDICATOR_2XL.style.display = "none";
    } else {
      INDICATOR_XL.style.display = "none";
      INDICATOR_2XL.style.display = "block";
    }
  }

  window.addEventListener("resize", updateIndicators);

  updateIndicators();
}

displayTailwindBreakPointsIndicators();
