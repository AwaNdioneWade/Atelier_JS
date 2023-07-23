class serie {
    constructor(titre, nombreSaison, episodesaison) {
      this.titre = titre;
      this.nombreSaison = nombreSaison;
      this.episodesaison = episodesaison;
  }
}

const episode1 = new serie('Episode 1', 5, 12);
const episode2 = new serie('Episode 2', 3, 6);
const episode3 = new serie('Episode 3', 6, 15);

const shows = [episode1, episode2, episode3];
serie

const generateComponent = (show) => {
  const titreText = show.titre;
  const saisonsText = show.nombreSaison + ' seasons';
  const episodesText = show.episodesaison + ' episodes per season';
  return {
    titreText,
    saisonsText,
    episodesText
  };
}

const epiosde1Component = generateComponent(episode1);
const epiosde2Component = generateComponent(episode2);
const epiosde3Component = generateComponent(episode3);


const showComponents = [epiosde1Component, epiosde2Component, epiosde3Component];


const body = document.querySelector('body');

const updateShows = () => {
  for (let show of showComponents) {
    const showPane = document.createElement('div');
    const titreSerie = document.createElement('h2');
    titreSerie.innerText = show.titreText;
    const showDetails = document.createElement('p');
    const saisons = document.createElement('p');
    saisons.innerText = show.saisonsText;
    const episodes = document.createElement('p');
    episodes.innerText = show.episodesText;
    showDetails.append(saisons);
    showDetails.append(episodes);
    showPane.append(titreSerie);
    showPane.append(showDetails);
    body.append(showPane);
  }
};

updateShows();