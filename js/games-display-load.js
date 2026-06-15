document.addEventListener("DOMContentLoaded", function() {
let container = document.getElementById("games-display");
fetch("/data/games.json")
  .then(response => response.json())
  .then(games => {
    games.sort((a, b) => {
      let dateA = a.releaseDate.split("-").reverse().join("-");
      let dateB = b.releaseDate.split("-").reverse().join("-");
      return new Date(dateB) - new Date(dateA);
    });
    games.forEach(game => {
      container.appendChild(document.createRange().createContextualFragment(`
        <div class="card me-3" style="min-width: 18rem;">
            <img src="${game.image}" class="card-img-top" alt="${game.title} image">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-primary">${game.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${game.releaseDate}</h6>
                <p class="card-text">${game.description}</p>
                <a href="${game.trailerLink}" class="btn btn-outline-secondary mt-auto" target="_blank">Trailer</a>
            </div>
        </div>`));
    });})
.catch(error => console.error("Error loading games:", error));
});