function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');
 
function clickRandomColor(e) {
  const colorBody = document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = colorBody;
}

btnElem.addEventListener('click', clickRandomColor)

