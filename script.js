
const songs = [
  { name: "For Your Love", artist: "Måneskin", link: "https://open.spotify.com/track/3ZeyEvTgSlKajHc0fckgZT"},
  { name: "The First Time", artist: "Damiano David", link: "https://open.spotify.com/track/7ETIZFr7163zFcz3RxKk5O" },
  { name: "Genius", artist: "Sia, Diplo e Labrinth", link: "https://open.spotify.com/intl-pt/track/4xigPf2sigSPmuFH3qCelB" },
  { name: "Blue", artist: "Troye Sivan", link: "https://open.spotify.com/intl-pt/track/0W2YQYzdW7EDKt17DfR8TV" },
  { name: "Meu Vício é Você", artist: "Alcione", link: "https://open.spotify.com/intl-pt/track/6ZlKnQhzFTEm27OUnXxeeh" },
  { name: "From Eden", artist: "Hozier", link: "https://open.spotify.com/track/5aRZk9oWIYUB5alrTs8TTV" },
  { name: "Perdição", artist: "L7NNON", link: "https://open.spotify.com/intl-pt/track/0xcdw2bWgJ4lrt3qZJrZ1o" },
  { name: "Camisa 10", artist: "Turma do Pagode", link: "https://open.spotify.com/intl-pt/track/4gjjWs6nwNLpMRYMa4Z2DZ" },
  { name: "505", artist: "Arctic Monkeys", link: "https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp" },
  { name: "Sweater Weather", artist: "The Neighbourhood", link: "https://open.spotify.com/intl-pt/track/2QjOHCTQ1Jl3zawyYOpxh6" },
  { name: "Do I Wanna Know?", artist: "Arctic Monkeys", link: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst" },
  { name: "Infinity", artist: "Jaymes Young", link: "https://open.spotify.com/intl-pt/artist/6QrQ7OrISRYIfS5mtacaw2" },
  { name: "Ordinary", artist: "Alex Warren", link: "https://open.spotify.com/intl-pt/track/6qqrTXSdwiJaq8SO0X2lSe" },
  { name: "Flaws", artist: "Calum Scott", link: "https://open.spotify.com/intl-pt/track/5Ohsg2xaxenqn0OfIIWeiS" },
  { name: "Mirrors", artist: "Justin Timberlake", link: "https://open.spotify.com/intl-pt/track/4rHZZAmHpZrA3iH5zx8frV" },
  { name: "Lose Control", artist: "Teddy Swims", link: "https://open.spotify.com/intl-pt/track/6usohdchdzW9oML7VC4Uhk" },
  { name: "C’t T. My Eyes Off Y.", artist: "Joseph V.", link: "https://open.spotify.com/intl-pt/track/5O0vv59rTNu0zJ2s9xI2GW" },
  { name: "Eternamente", artist: "Gal Costa", link: "https://open.spotify.com/intl-pt/track/1ngbz6irbfEmpsYcZhzX6L" },
  { name: "Lovers", artist: "Anna of The North", link: "https://open.spotify.com/intl-pt/track/6bZuZKR8hoyzZXNh1IW2Bu" },
  { name: "Did I Mention", artist: "Mitchel Hope", link: "https://open.spotify.com/intl-pt/track/1YekSxsAlGlYvm9zjLsKdh" },
  { name: "This Is Love", artist: "Guns N' Roses", link: "https://open.spotify.com/intl-pt/track/2FEWcWHnDmGD6WSqpW4VYu" },
  { name: "Carry You Home", artist: "Alex Warren, E.H", link: "https://open.spotify.com/track/7sMYSk7tqzP8AZKZ8D9V8M" },
  { name: "Home", artist: "Gabrielle Aplin", link: "https://open.spotify.com/intl-pt/track/0OwoAzOM3ULaLoiYpC5axn" },
  { name: "I Wanna Be Yours", artist: "Arctic Monkeys", link: "https://open.spotify.com/intl-pt/track/5XeFesFbtLpXzIVDNQP22n" },
  { name: "Bang Bang", artist: "K'NAAN", link: "https://open.spotify.com/intl-pt/track/61YzdCCBPM5Pc7lIiD5i8C" },
  { name: "Let The World Burn", artist: "Chris Grey", link: "https://open.spotify.com/intl-pt/track/1De425SCFJULIHbcmeebUw" },
  { name: "Exagerado", artist: "Cazuza", link: "https://open.spotify.com/intl-pt/track/4d0DpU7Odiv0ztvX2GxJlk" },
  { name: "My Kind Of Woman", artist: "Mac DeMarco", link: "https://open.spotify.com/intl-pt/track/6jgkEbmQ2F2onEqsEhiliL" },
  { name: "Dandelions", artist: "Ruth B", link: "https://open.spotify.com/intl-pt/track/2eAvDnpXP5W0cVtiI0PUxV" },
  { name: "My Gf is a Witch", artist: "October C.", link: "https://open.spotify.com/track/5mfzm6MZXTFqZr1a0XQdyH" }
];


const carousel = document.getElementById("carousel");
const selectedSongDiv = document.getElementById("selectedSong");
const spinButton = document.getElementById("spinButton");

// Adiciona músicas várias vezes para simular roleta
function fillCarousel() {
  carousel.innerHTML = "";

  const repeated = [...songs, ...songs, ...songs];
  repeated.forEach(song => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    item.textContent = song.name;
     item.title = `${song.name} - ${song.artist}`; // Tooltip ao passar o mouse
    carousel.appendChild(item);
    const repeated = [...songs, ...songs, ...songs, ...songs, ...songs,];
    const startIndex = Math.floor(songs.length * 2.5); // Centraliza
    const randomOffset = Math.floor(Math.random() * (songs.length - 6)) + 3;
    const targetIndex = startIndex + randomOffset;
    const indicatorOffset = 1;
    const selected = songs[(randomOffset + indicatorOffset) % songs.length];

  });
}

let availableIndexes = [...Array(songs.length).keys()];
let lastIndex = null;
const minDistance = 8;

function spinCarousel() {
  if (availableIndexes.length === 0) {
    availableIndexes = [...Array(songs.length).keys()];
  }

  let possibleIndexes = availableIndexes;

  // Se houver uma música anterior, filtramos pela distância
  if (lastIndex !== null) {
    const distantIndexes = availableIndexes.filter(
      (i) => Math.abs(i - lastIndex) >= minDistance
    );

    // Se houver opções distantes o suficiente, usamos só essas
    if (distantIndexes.length > 0) {
      possibleIndexes = distantIndexes;
    }
  }

  const randomIndex = Math.floor(Math.random() * possibleIndexes.length);
  const selectedIndex = possibleIndexes[randomIndex];

  // Remove da lista de disponíveis
  availableIndexes = availableIndexes.filter((i) => i !== selectedIndex);

  lastIndex = selectedIndex;

  const targetIndex = songs.length + selectedIndex;
  const itemHeight = 60;
  const translateY = -targetIndex * itemHeight;

  selectedSongDiv.innerHTML = "";
  carousel.style.transition = "transform 1s ease";
  carousel.style.transform = `translateY(${translateY}px)`;

  const indicatorOffset = -1;

  function onTransitionEnd() {
    const index = (selectedIndex + indicatorOffset + songs.length) % songs.length;
    const selected = songs[index];

    selectedSongDiv.innerHTML = `🎶 <a href="${selected.link}" target="_blank">${selected.name} - ${selected.artist}</a>`;
    carousel.removeEventListener("transitionend", onTransitionEnd);
  }

  carousel.addEventListener("transitionend", onTransitionEnd);
}


fillCarousel();
spinButton.addEventListener("click", spinCarousel);

