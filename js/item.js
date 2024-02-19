const url = "https://qnfvvoacumskcnxowsik.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZnZ2b2FjdW1za2NueG93c2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE4MzQsImV4cCI6MjAyMzQ3NzgzNH0.QE7-n-xKzpvWgnKjIi24azceWh3Jti73mPJyJ-1kLwc";

fetch(url + "/rest/v1/vild_mad", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(categories) {
  //looper og kalder showItemList
  console.log(categories);
  categories.forEach(showItem);
}

function showItem(item) {
  console.log(item);
  //fang template
  const template = document.querySelector("#item_list_template").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold liste
  /* virker ikke
  copy.querySelector("img").src = `https://qnfvvoacumskcnxowsik.supabase.co/rest/v1/vild_mad?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZnZ2b2FjdW1za2NueG93c2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE4MzQsImV4cCI6MjAyMzQ3NzgzNH0.QE7-n-xKzpvWgnKjIi24azceWh3Jti73mPJyJ-1kLwc&select=image${item.id}`;
  */

  //ændre indhold item

  /* virker ikke
  document.querySelector("img").src = `https://qnfvvoacumskcnxowsik.supabase.co/rest/v1/vild_mad?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZnZ2b2FjdW1za2NueG93c2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE4MzQsImV4cCI6MjAyMzQ3NzgzNH0.QE7-n-xKzpvWgnKjIi24azceWh3Jti73mPJyJ-1kLwc&select=image${item.id}`;
  */

  document.querySelector(".title").textContent = item.name;
  document.querySelector(".about").textContent = item.description;
  document.querySelector(".where").textContent = item.location;
  document.querySelector(".when").textContent = item.time;
  document.querySelector(".how_spot").textContent = item.how_spot;
  document.querySelector(".how_pick").textContent = item.how_pick;

  //ændre URL

  //append
  document.querySelector(".item_container").appendChild(copy);
}
