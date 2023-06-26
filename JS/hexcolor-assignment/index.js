let savedColor = "#FFFFFF";
let firstHex = "#FFFFFF";
let secondHex = "#FFFFFF";

function randomColor() {
  const hexVals = "013456789abcdef";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += randomValue(hexVals);
  }
  return color;
}

function randomValue(object) {
  return object[Math.floor(Math.random() * object.length)];
}

function displayVariables(firstHex, secondHex) {
  document.getElementById("firstHex").textContent = firstHex;
  document.getElementById("secondHex").textContent = secondHex;
}

function setStyles(firstHex, secondHex) {
  document.getElementById("hex-generator").style.backgroundColor = firstHex;
  document.getElementById("hex-container").style.backgroundColor = secondHex;
}

async function replaceColor() {
  let newColor = await randomColor();

  try {
    secondHex = savedColor;
    savedColor = newColor;
    firstHex = savedColor;
  } catch (error) {
    console.error(error);
  }
  displayVariables(firstHex, secondHex);
  setStyles(firstHex, secondHex);
}
