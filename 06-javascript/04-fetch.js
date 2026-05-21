const pokemonColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#ea7ce8",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const fetchPokemon = async () => {
  const main = document.querySelector("main");
  const cards = document.createElement("div");
  cards.classList.add("cards-container");
  main.append(cards);

  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0",
    );
    const data = await response.json();
    for (let id = 0; id < 25; id++) {
      const pokemonResponse = await fetch(data.results[id].url);
      const pokemonData = await pokemonResponse.json();

      const card = createCard(pokemonData);
      cards.append(card);
    }
  } catch (error) {
    console.error("Request failed", error);
  } finally {
    console.log("executes either way");
  }
};

const createCard = function (pokemonData) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.id = pokemonData.name;

  const name = document.createElement("h2");
  name.classList.add("name");
  name.textContent = pokemonData.name;

  const img = document.createElement("img");
  img.src = pokemonData.sprites.other["official-artwork"].front_default;
  img.alt = pokemonData.name;
  img.width = 160;
  img.height = 160;
  card.append(name, img);

  const pokemonTypes = document.createElement("div");
  pokemonTypes.classList.add("pokemon-types");
  card.append(pokemonTypes);

  pokemonData.types.forEach((t) => {
    const pokemonType = document.createElement("div");

    pokemonType.textContent = t.type.name;
    pokemonType.style.backgroundColor = pokemonColors[t.type.name];
    pokemonTypes.append(pokemonType);
  });

  return card;
};

window.addEventListener("load", async () => {
  await fetchPokemon();
  const loading = document.getElementById("loading");
  loading.classList.add("hidden");
});

const search = document.querySelector("input");
search.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const cardsContainer = document.querySelector(".cards-container");
    const cardList = document.querySelectorAll("article");
    let foundCard = null;
    let message;

    if ((message = document.querySelector(".message")) !== null) {
      message.classList.add("hidden");
    }

    cardList.forEach((card) => {
      types = card.querySelector("div");
      let found = false;

      for (const type of types.children) {
        if (type.textContent === event.target.value) {
          found = true;
        }
      }
      if (card.id !== event.target.value && !found) {
        card.classList.add("hidden");
      } else {
        if (card.classList.contains("hidden")) {
          card.classList.remove("hidden");
        }
        foundCard = card;
      }
    });

    if (foundCard === null) {
      let message = document.querySelector(".message");
      if (message === null) {
        message = document.createElement("p");
        message.textContent = "No Pokémon found";
        message.classList.add("message");
      } else {
        message.classList.remove("hidden");
      }
      cardsContainer.append(message);
    }
  } else if (event.target.value === "") {
    const cardList = document.querySelectorAll("article");
    let message;

    if ((message = document.querySelector(".message")) !== null) {
      message.classList.add("hidden");
    }
    cardList.forEach((card) => {
      if (card.classList.contains("hidden")) {
        card.classList.remove("hidden");
      }
    });
  }
});
