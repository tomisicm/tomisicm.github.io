/**
 * Scale down to a4 format by adding .scale-cv
 * The class .scale-cv is added to the body, where it reduces the size of the elements .
 */
function cvScale() {
  document.body.classList.add("scale-cv");
}

/**
 * Remove a4 scale by removing .scale-cv
 * The .scale-cv class is removed from the body after to return the elements to normal size.
 */
function removeScale() {
  document.body.classList.remove("scale-cv");
}

/**
 * Generates a PDF resume based on the content of the "area-cv" element.
 */
function generateResume() {
  let areaCv = document.getElementById("area-cv");

  const opt = {
    margin: 0,
    filename: "tomisic_mihailo.pdf",
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 4,
    },
    jsPDF: {
      format: "a4",
      orientation: "portrait",
    },
  };

  html2pdf().set(opt).from(areaCv).toPdf().save();
}

let resumeButton = document.getElementById("resume-button");

resumeButton.addEventListener("click", () => {
  cvScale();

  generateResume();

  setTimeout(removeScale, 5000);
});
