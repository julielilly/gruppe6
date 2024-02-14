// https://qnfvvoacumskcnxowsik.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZnZ2b2FjdW1za2NueG93c2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE4MzQsImV4cCI6MjAyMzQ3NzgzNH0.QE7-n-xKzpvWgnKjIi24azceWh3Jti73mPJyJ-1kLwc

fetch("https://qnfvvoacumskcnxowsik.supabase.co/rest/v1/vild_mad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZnZ2b2FjdW1za2NueG93c2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDE4MzQsImV4cCI6MjAyMzQ3NzgzNH0.QE7-n-xKzpvWgnKjIi24azceWh3Jti73mPJyJ-1kLwc",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}
