function backgroundMusic() {
  // Select the icon and audio elements
  const musicIcon = document.getElementById("musicIcon");
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Add an event listener to the icon to handle the click event
  musicIcon.addEventListener("click", () => {
    // Check if the audio is already playing
    if (backgroundMusic.paused) {
      // Reset audio to start from the beginning
      backgroundMusic.currentTime = 0;
      // Play the audio
      backgroundMusic.play();
    } else {
      // Pause the audio
      backgroundMusic.pause();
    }
  });

  // Optional: to loop the music
  backgroundMusic.loop = true;
}

async function fetchPokemon(){
  try{
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  // console.log(pokemonName);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();

  const pokemonSprite = document.getElementById("pokemonSprite");
  const pokemonSpriteShiny = document.getElementById("pokemonSpriteShiny");

  pokemonSprite.src = data.sprites.front_default;
  pokemonSpriteShiny.src = data.sprites.front_shiny;

  const info = document.querySelector(".info");
  info.innerHTML = `
  <p>Pokemon Name: ${data.name}</p>
  <p>Pokemon height: ${data.height}</p>
  <p>Pokemon weight: ${data.weight}</p>
  <p>Pokemon type: ${data.types[0].type.name}</p>

  `

} catch(error){
  console.log(error)
}

}

backgroundMusic();
