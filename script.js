const toggleMode = document.getElementsByClassName("toggle-mode");
let nightMode = true;
Array.from(toggleMode).forEach((element) =>
  element.addEventListener("click", (event) => {
    if (event.target.id === "light-mode" && nightMode) {
      document.body.classList.toggle("night");
      nightMode = !nightMode;
    } else if (event.target.id === "dark-mode" && !nightMode) {
      nightMode = !nightMode;
      document.body.classList.toggle("night");
    }
  })
);
