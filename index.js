const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const img = document.querySelector(".sadImg");
const h1 = document.querySelector("h1");
const btnHideDiv = document.getElementById("btnHide");

function disableNoButton() {
  // Disable the no button
  noButton.disabled = true;

  // Change the position of the no button randomly
  const newX = Math.random() * window.innerWidth;
  const newY = Math.random() * window.innerHeight;

  noButton.style.position = "absolute";
  noButton.style.left = newX + "px";
  noButton.style.top = newY + "px";
}

function yesBtnClick() {
  noButton.parentNode.removeChild(noButton);
  yesButton.parentNode.removeChild(yesButton);

  img.src = "https://www.icegif.com/wp-content/uploads/2023/06/icegif-775.gif";
  h1.innerText = "Yayyyy Finally!!";

  btnHideDiv.classList.remove('displayNone');
}
