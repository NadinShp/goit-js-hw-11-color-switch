import './styles.css';
import colors from "./js/colors";

const refs = {
    body: document.querySelector(".body"),
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let timerId = null;

function handleCurrentColor() {
    const choosenColorNumber = randomIntegerFromInterval(0, colors.length);
    const choosenColor = colors[choosenColorNumber];
    refs.body.style.backgroundColor = `${choosenColor}`;
}
function handleChangeBgColor(event) {
    refs.buttonStart.setAttribute('disabled', true);
    timerId = setInterval(handleCurrentColor, 1000)
}
function handleStopChangingBgColor() {
    refs.buttonStart.removeAttribute('disabled');
    clearInterval(timerId);
}

refs.buttonStart.addEventListener("click", handleChangeBgColor);
refs.buttonStop.addEventListener("click", handleStopChangingBgColor);
