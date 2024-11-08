const textBtn = document.getElementById("btn");

const tExt = document.getElementById("text");

textBtn.addEventListener("click", () => {
  tExt.textContent = "ボタンをクリックしました";
});
