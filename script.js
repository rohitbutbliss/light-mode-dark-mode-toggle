const toggleMode = document.getElementsByClassName("toggle-mode");
const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");
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
