// sætter variabler til databasen
const url = "https://qnfvvoacumskcnxowsik.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZnZ2b2FjdW1za2NueG93c2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE4MzQsImV4cCI6MjAyMzQ3NzgzNH0.QE7-n-xKzpvWgnKjIi24azceWh3Jti73mPJyJ-1kLwc";

// sætter variabler til URL-parametre
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
let allItems = null;

//fetcher databasens indhold i fuld
fetch(url + "/rest/v1/vild_mad", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

// Funktion til at vise data
function showData(items) {
  console.log(items);

  // Filtrer items baseret på kategori
  items = getFilteredItems(items);
  allItems = items;
  items.forEach(showItem);
}

// Funktion til at vise enkelt item
function showItem(item, index) {
  console.log(item);
  item.index = index;

  //fang template
  const template = document.querySelector("#item_list_template").content;

  //lav en kopi af template
  const copy = template.cloneNode(true);

  //ændre indhold i kopien
  copy.querySelector(".item").src = item.image;
  copy.querySelector(".item_button").onclick = function () {
    updateChosenItem(item);
    hej(item);
  };

  //ændre indhold på item
  document.querySelector(".item_main_info img").src = item.image;

  document.querySelector(".title").textContent = item.name;
  document.querySelector(".about").textContent = item.description;
  document.querySelector(".where").textContent = item.location;
  document.querySelector(".when").textContent = item.time;
  document.querySelector(".how_spot").textContent = item.how_spot;
  document.querySelector(".how_pick").textContent = item.how_pick;

  //ændr URL
  copy.querySelectorAll(".read-more").forEach((elem) => elem.setAttribute("href", `produkt.html?id=${product.id}`));

  //append kopien
  document.querySelector(".item_container").appendChild(copy);
}

// Funktion til at håndtere klik på item
function hej(item) {
  console.log(item.index);
  let width = document.querySelector(".item_container").scrollWidth;
  console.log(width);
  console.log(width * (1 / (allItems.length / item.index)));
  document.querySelector(".item_container").scrollTo(width * (1 / (allItems.length / item.index)), 1025 * 3);
}

// Variabel til at holde nuværende index
let currentIndex = 0;

// Funktion til at scrolle til venstre
function left() {
  let width = document.querySelector(".item_container").scrollWidth;
  if (currentIndex > 0) currentIndex--;
  document.querySelector(".item_container").scrollTo(width * (1 / (allItems.length / currentIndex)), 1025 * 3);
}

// Funktion til at scrolle til højre
function right() {
  let width = document.querySelector(".item_container").scrollWidth;
  if (currentIndex < allItems.length - 2) currentIndex++;
  document.querySelector(".item_container").scrollTo(width * (1 / (allItems.length / currentIndex)), 1025 * 3);
}

// Funktion til at opdatere valgt item
function updateChosenItem(item) {
  //opdaterer indhold på item
  document.querySelector(".item_main_info img").src = item.image;
  document.querySelector(".title").textContent = item.name;
  document.querySelector(".about").textContent = item.description;
  document.querySelector(".where").textContent = item.location;
  document.querySelector(".when").textContent = item.time;
  document.querySelector(".how_spot").textContent = item.how_spot;
  document.querySelector(".how_pick").textContent = item.how_pick;
}

// Funktion til at filtrere items baseret på kategori
function getFilteredItems(items) {
  switch (category) {
    case "waterways":
      items = items.filter((i) => i.area == "Watercourse" || i.area == "Beach" || i.area == "Lake" || i.area == "Beach meadow");
      break;
    case "open":
      items = items.filter((i) => i.area == "Fence" || i.area == "Grassland");
      break;
    case "forests":
      items = items.filter((i) => i.area == "Deciduous forest" || i.area == "Corniferous forest");
      break;
    case "cities":
      items = items.filter((i) => i.area == "Town");
      break;
  }
  return items;
}
