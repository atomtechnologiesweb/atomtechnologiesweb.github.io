
const urlParams = new URLSearchParams(window.location.search);
const gameTitle = urlParams.get('game-title');

const titleElement = document.getElementById('title');
const releaseDateElement = document.getElementById('releaseDate');
const descriptionElement = document.getElementById('description');
const trailerLinkElement = document.getElementById('trailerLink');
const platformsElement = document.getElementById('platforms');
const creatorFavoriteElement = document.getElementById('creatorFavorite');
const gameImageElement = document.getElementById('gameImage');
const developmentEngineElement = document.getElementById("developmentEngine")

//find game in games.json with matching title and populate page with its data
fetch("/data/games.json")
    .then(response => response.json())
    .then(games => {
        const game = games.find(g => g.title === gameTitle);
        if (game) {
            titleElement.textContent = game.title;
            releaseDateElement.textContent = `Released ${game.releaseDate}`;
            descriptionElement.textContent = game.description;
            trailerLinkElement.href = game.trailerLink;
            gameImageElement.src = game.image;
            platformsElement.innerHTML = '';
            for (let platform of game.platforms) {
                if (platform === "Windows") {
                    platformsElement.innerHTML += `<span class="badge bg-secondary"><img src="/bootstrap/icons/windows.svg" alt="Windows" class="svg-light p-1">Windows</span> `;
                } else if (platform === "Xbox") {
                    platformsElement.innerHTML += `<span class="badge bg-secondary"><img src="/bootstrap/icons/xbox.svg" alt="Xbox" class="svg-light p-1">Xbox</span> `;
                }
            }
            if (game.creatorFavorite) {
                creatorFavoriteElement.innerHTML = `<p class="badge bg-primary p-1"><img src="/bootstrap/icons/heart-fill.svg" class="svg-light p-1">Creator Favorite</p>`;
            } else {
                creatorFavoriteElement.innerHTML = '';
            }
            developmentEngineElement.innerText = `Developed with ${game.developmentEngine}`
        } else {
            titleElement.textContent = "Game Not Found";
            releaseDateElement.textContent = "";
            descriptionElement.textContent = "The game you are looking for could not be found.";
            trailerLinkElement.style.display = "none";
            platformsElement.style.display = "none";
        }
    })
    .catch(error => {
        console.error("Error loading game data:", error);
        titleElement.textContent = "Error";
        releaseDateElement.textContent = "";
        descriptionElement.textContent = "An error occurred while loading the game data.";
        trailerLinkElement.style.display = "none";
        platformsElement.style.display = "none";
    });