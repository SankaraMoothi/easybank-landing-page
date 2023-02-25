let bar = document.getElementById("bar");
let close = document.getElementById("close");
let links = document.getElementById("links");

bar.addEventListener("click", () => {
  bar.style.display = "none";
  close.style.display = "block";
  links.classList.add("show");
});

close.addEventListener("click", () => {
  close.style.display = "none";
  bar.style.display = "block";
  links.classList.remove("show");
});
