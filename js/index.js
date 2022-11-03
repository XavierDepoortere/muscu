const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
let exercices = [];
let muscle = "";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "36d2c6f107msh23210eebc63e0dbp1cf5c2jsn70ba52785bdf",
    "X-RapidAPI-Host": "musclejp.p.rapidapi.com",
  },
};

const fetchExercices = async () => {
  exercices = await fetch(
    `https://musclejp.p.rapidapi.com/get-cible/${muscle}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const exercicesDisplay = async () => {
  await fetchExercices();
  let index = exercices.length;
  for (let i = 0; i < index; i++) {
    console.log(exercices[i].cible[0]);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  muscle = searchInput.value;
  exercicesDisplay();
});
