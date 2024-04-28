const sArray = [];
const storeSliderValues = () => {
    let sliders = {};
    let slidersJSON = {};

    sliders.red = parseInt(document.getElementById("sldRed").value)
    sliders.green = parseInt(document.getElementById("sldGreen").value)
    sliders.blue = parseInt(document.getElementById("sldBlue").value)

    slidersJSON = JSON.stringify(sliders)
    localStorage.setItem("storeSliders",slidersJSON);
};

const restoreSliderValues = () => {
    let sliders = {};
    let slidersJSON = localStorage.getItem("storeSliders")
    sliders = JSON.parse(slidersJSON)

    document.getElementById("sldRed").value = sliders.red;
    document.getElementById("sldGreen").value = sliders.green;
    document.getElementById("sldBlue").value = sliders.blue;
};

const storeSwatches = (red, green, blue) => {
    // bouw een array met kleurinfo objecten
    let swatch = {}

    swatch.red = parseInt(document.getElementById("sldRed").value)
    swatch.green = parseInt(document.getElementById("sldGreen").value)
    swatch.blue = parseInt(document.getElementById("sldBlue").value)

    sArray.push(swatch)

    localStorage.setItem("storage", JSON.stringify(sArray));
};

const restoreSwatches = () => {
    let swatchesArray = [];
    const swatchesJSON = localStorage.getItem("storage");
    swatchesArray = JSON.parse(swatchesJSON);

    swatchesArray.forEach((swatch) => {
        addSwatchComponent(swatch.red, swatch.green, swatch.blue);
    })
};
