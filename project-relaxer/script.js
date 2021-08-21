const container = document.querySelector(".container");
const text = document.querySelector("#text");
const totalTime = 7500;
const breatherTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
function breatheAnimation() {
  text.innerHTML = "Breath In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatherTime);
}
setInterval(breatheAnimation, totalTime);
