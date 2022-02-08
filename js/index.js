//1
const buttonChangeTxt = document.querySelector(".btn-click-me");

buttonChangeTxt.onclick = () => {
  buttonChangeTxt.textContent === "Click Me"
    ? (buttonChangeTxt.textContent = "Button Was Clicked")
    : (buttonChangeTxt.textContent = "Click Me");
};

//2
const buttonChangeColor = document.querySelector(".btn-change-color");

buttonChangeColor.onclick = () => {
  buttonChangeColor.style.backgroundColor = `rgb(
    ${Math.floor( Math.random() * 255)}, 
    ${Math.floor(Math.random() * 100)},
    ${Math.floor(Math.random() * 255)})`;
};


//3