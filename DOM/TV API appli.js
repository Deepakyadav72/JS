const API_BASE_URL = 'https://api.tvmaze.com/search/shows?q=girls'

const api_fetch = async ()  => {
    try{
        let res= await fetch(API_BASE_URL);
        let data = await res.json();
        Render_UI(data)
    } catch(error) {
        console.log('---> ~ error:', error); 
    }
}


const Render_UI = (infodata) => {
    let mainDiv = document.getElementById("maincontainer");
    infodata.forEach(element => {
        let show = element.show;   // shortcut

        let cardDiv = document.createElement('div');

        const img = document.createElement('img');
        const id = document.createElement('h5');
        const genres = document.createElement('h5');
        const language = document.createElement('p');
        const premiered = document.createElement('p');
        const runtime = document.createElement('p');
        const rating = document.createElement('p');
        const status = document.createElement('p');
        const summary=document.createElement("p")

        // sirf values
        img.src = show.image.original;
        id.innerText = show.id;
        genres.innerText = 'genres ${element.genres}';
        language.innerText = 'language${element.language}';
        premiered.innerText = 'premiered${element.premiered}';
        runtime.innerText = 'runtime${element.runtime}';
        rating.innerText = 'rating${element.rating.average}';
        status.innerText = 'status${element.status}';
        summary.innerHTML='summary${element.summary,summary}'

        cardDiv.className = "card-Div";

        cardDiv.append(img, id, genres, language, premiered, runtime, rating, status);
        mainDiv.append(cardDiv);
    });
}