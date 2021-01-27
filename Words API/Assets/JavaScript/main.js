let w1 = "men";
fetch("https://wordsapiv1.p.rapidapi.com/words/${w1}", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "f704afe3c6mshf4941b319430631p1d85f2jsna4ce6b530ea1",
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
