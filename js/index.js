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
const imgChange = document.querySelector(".img");

imgChange.addEventListener('mouseover', function(){
  this.src = `https://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg`
})
imgChange.addEventListener('mouseleave', function(){
  this.src = `https://s3.nat-geo.ru/images/2020/9/13/d34f669d4d6e4dba824f17593319ca13.max-2500x1500.jpg`
})

//4
const changeClass = document.querySelector("#elem");
const arrClass = ['red', 'blue', 'yellow']
let countIndex = 0;
changeClass.onclick = () => {
  changeClass.classList.remove(arrClass[countIndex])
  countIndex  = (countIndex  + 1) % arrClass.length;
  changeClass.classList.add(arrClass[countIndex])
  changeClass.innerHTML = `класс у элемента ${arrClass[countIndex]}`
}