window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log(sidenVises);

  //viser menu icon
  document.querySelector(".menu_icon").classList.remove("hide");

  //skjuler menu
  document.querySelector(".close_icon").classList.add("hide");
  document.querySelector(".menu").classList.add("hide");

  //sætter klik på menu knap
  document.querySelector(".menu_icon").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log(toggleMenu);

  //skjuler menu icon
  document.querySelector(".menu_icon").classList.add("hide");
  document.querySelector(".close_icon").classList.remove("hide");

  //viser menu
  document.querySelector(".menu").classList.remove("hide");

  //sætter klik på closeIcon
  document.querySelector(".close_icon").addEventListener("click", sidenVises);
}
