let interrupitor = document.getElementById("interrupitor");
let root = document.documentElement;

interrupitor.addEventListener("click", () => {
  root.classList.toggle("tema-claro");
});
