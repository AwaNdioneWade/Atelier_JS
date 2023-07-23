// class Episode {
//     constructor(title, duration, hasBeenWatched) {
//       this.title = title;
//       this.duration = duration;
//       this.hasBeenWatched = hasBeenWatched;
//     }
//   }
  
//   let episodes = [
//     new Episode('épisode1, .50, true'),
//     new Episode('épisode2', 45, false),
//     new Episode('épisode3', 55, false)
//   ];
  
  
//   for (let episode of episodes) {
//     episode.hasBeenWatched = false;
//   }
  
  
//   const body = document.querySelector('body');
  
//   for(let episode of episodes) {
//     let newDiv = document.createElement('div');
//     let newTitle = document.createElement('h2');
//     newTitle.innerText = 'Info épisode';
//     let newParagraph = document.createElement('p');
//     newParagraph.innerText = `L'${episode.title} dure ${episode.duration} minutes ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
//     newDiv.append(newTitle);
//     newDiv.append(newParagraph);
//     body.append(newDiv);
//   }

let online = true;
let message = "";

if (online) {
    message = "Utilisateur en ligne !";
} else {
    message = "Utilisateur hors ligne !";
}

alert(message);
