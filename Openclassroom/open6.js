class Serie {
    constructor(titre, nombreSaison) {
      this.titre = titre;
      this.nombreSaison = nombreSaison;
      this.notes = [];
      this.moyenneNote = 0;
    }
    
    ajoutNote(note) {
      this.notes.push(note);
      let somme = 0;
      for (let note of this.notes) {
        somme += note;
      }
      
      this.moyenneNote = somme / this.notes.length;
    }
  }
  
  
  const episode1 = new Serie('Episode 1', 1);
  const epiosde2 = new Serie('Episode 2', 2);
  const episode3 = new Serie('Episode 3', 3);
  
  const series = [episode1, epiosde2, episode3];
  
  const body = document.querySelector('body');
  const refresh = document.querySelector('#refresh');
  
  refresh.addEventListener('click', () => {
    modifierSerie();
    ajouterserie();
    supprimerSerie();
  })
  
  const supprimerSerie = () => {
    for (let show of series) {
      const showPane = document.createElement('div');
      const showHeading = document.createElement('h2');
      showHeading.innerText = show.titre;
      const showDetails = document.createElement('p');
      const seasons = document.createElement('p');
      seasons.innerText = show.nombreSaison + ' seasons';
      const notes = document.createElement('p');
      notes.innerText = show.moyenneNote > 0 ? show.notes.length + ' ratings\n' + show.moyenneNote.toFixed(1) + ' stars' : 'No ratings yet';
      showDetails.append(seasons);
      showDetails.append(notes);
      showPane.append(showHeading);
      showPane.append(showDetails);
      body.append(showPane);
    }
  };
  
  const modifierSerie = () => {
    const children = [];
    for (let childNode of body.childNodes) {
      children.push(childNode);
    }
    for (let child of children) {
      if (child.tagName == 'DIV') {
        body.removeChild(child);
      }
    }
  }
  
  const ajouterserie = () => {
    for (let show of series) {
      if (Math.random() >= 0.2) {
        const numberOfRatings = Math.floor(Math.random() * 4 + 1);
        for (let i = 0; i < numberOfRatings; i++) {
          const rating = Math.floor(Math.random() * 5 + 1);
          show.ajoutNote(rating);
        }
      }
    }
  }
  
  supprimerSerie();