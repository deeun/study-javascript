const button = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const sidebar_contents = document.getElementById("sidebar_contents");
const openBar = () => {
  sidebar.style.width = "250px";
  sidebar_contents.style.display = "flex";
};

button.addEventListener("click", openBar);

const closeBar = () => {
  sidebar.style.width = "0";
  sidebar_contents.style.display = "none";
};
