function flatDjango() {
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((filmData) => {
      //the poster card with details
      function showFilms(film) {
        let card = document.getElementById("cards");
        let posterImage = document.createElement("img");
        let movieDetails = document.getElementById("moviedetails");
        let posterContainer = document.getElementById("postercontainer");
        let detailsContainer = document.getElementById("detailscontainer");
        let movieLength = document.createElement("p");
        let movieShowtime = document.createElement("p");
        let movieTitle = document.createElement("h3");
        let moreDetails = document.createElement("p");
        let buyButton = document.createElement("button");
        let tickets = document.createElement("p");
        let remTickets = film.capacity - film.tickets_sold;

        posterContainer.innerHTML = "";
        detailsContainer.innerHTML = "";

        //InnerText details
        movieLength.innerText = `Movie is ${film.runtime} minutes long`;
        movieShowtime.innerText = `Show starts at ${film.showtime}`;
        movieTitle.innerText = film.title;
        moreDetails.innerText = film.description;
        buyButton.textContent = "Buy Ticket";
        tickets.innerText = `${remTickets} Seats remaining`;

        //Poster Settings
        posterImage.src = film.poster;
        posterImage.height = 350;
        posterImage.length = 370;

        //Dom Manipulation
        posterContainer.appendChild(posterImage);
        detailsContainer.appendChild(movieTitle);
        detailsContainer.appendChild(moreDetails);
        detailsContainer.appendChild(movieShowtime);
        detailsContainer.appendChild(movieLength);
        detailsContainer.appendChild(buyButton);
        detailsContainer.appendChild(tickets);

        //Event Listener
        buyButton.addEventListener("click", () => {
          if (remTickets === 1) {
            buyButton.innerText = "SOLD OUT";
            tickets.innerText = "";
          } else {
            --remTickets;
            tickets.innerText = `${remTickets} seats remaining`;
          }
        });
      }
      filmData.forEach(film => {
        movielist = document.getElementById("movielist")
        eachMovie = document.createElement('ol')
        eachMovie.innerText = `${film.id}:${film.title}`
        movielist.appendChild(eachMovie)
        eachMovie.addEventListener('click',()=>{
          showFilms(film)
        })
      });
      //default movie setting
      const defaultMovie = movielist.querySelector('ol');
      if(defaultMovie){
        defaultMovie.click()
      }
    });
}
flatDjango()