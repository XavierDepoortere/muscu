const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "36d2c6f107msh23210eebc63e0dbp1cf5c2jsn70ba52785bdf",
    "X-RapidAPI-Host": "musclejp.p.rapidapi.com",
  },
};

fetch("https://musclejp.p.rapidapi.com/get-cible/biceps", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
