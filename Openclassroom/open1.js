let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;
let episodeTitle = 'episode 1';
let episodeDuration = episodeTime;
let hasBeenWatched = false;
let totalShowTime = ((episodeTime + commercialTime)*numberOfEpisodes)*numberOfSeasons;
document.querySelector('#info').innerText = (numberOfEpisodes + ' épisodes de ' + numberOfSeasons + ' saisons fait ' + totalShowTime + ' minutes');

const hoursPerDay = 24;

const minutesPerHour = 60;

const secondsPerMinute = 60;

document.querySelector('#jour').innerText = ('Une journée fait ' + hoursPerDay + ' heures');
document.querySelector('#heure').innerText = ('Une heure fait ' + minutesPerHour + ' minutes');
document.querySelector('#minute').innerText = ('Une minute fait '+ secondsPerMinute + ' secondes');
document.querySelector('#infoEpisode').innerText = (`L' ${episodeTitle} dure ${episodeDuration} minutes ${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`)


let episode = {
    title: 'episode 2',
    duration: 55,
    watched: false
}

episodeTitle = episode.title;
episodeDuration = episode.duration;
hasBeenWatched = episode.watched;

document.querySelector('#infoEpisode2').innerText = (`L'${episodeTitle} dure ${episodeDuration} minutes ${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`)

class Episodes {
    constructor(title, duration, hasBeenWatched){
        this.title = title,
        this.duration = duration,
        this.hasBeenWatched = hasBeenWatched
    }
}

let episode3 = new Episodes("épisode 3", 30, true);
let episode4 = new Episodes("épisode 4", 40, false);
let episode5 = new Episodes("épisode 5", 25, true);

document.querySelector('#infoEpisode3').innerText = (`L'${episode3.title} dure ${episode3.duration} minutes ${hasBeenWatched ? 'Already watched' : 'watched'}`);
document.querySelector('#infoEpisode4').innerText = (`L'${episode4.title} dure ${episode4.duration} minutes ${hasBeenWatched ? 'Already watched' : 'Not watched'}`);
document.querySelector('#infoEpisode5').innerText = (`L'${episode5.title} dure ${episode5.duration} minutes ${hasBeenWatched ? 'Already watched' : 'watched'}`);

let episodes = [episode3, episode4, episode5];


const body = document.querySelector('body');

for(let i = 0; i < episodes.length; i++) {
    let newDiv = document.createElement('div');
    let newTitle = document.createElement('h2');
    newTitle.innerText = `Info de l'${episodes[i].title}`;
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `L'${episodes[i].title} dure ${episodes[i].duration} minutes ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
  }

episodes = [];
episodes.push(episode3, episode4, episode5, episode3);
episodes.pop();

numberOfEpisodes = episodes.length;
// ====================================


document.querySelector('#episodes').innerText = numberOfEpisodes;

for(let episode of episodes) {
  let newDiv1 = document.createElement('div');
  let newTitle1 = document.createElement('h2');
  newTitle1.innerText = `Info de l'${episode
    .title}`;
  let newParagraph1 = document.createElement('p');
  newParagraph1.innerText = `L'${episode.title} dure ${episode.duration} minutes ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;  newDiv1.append(newTitle1);
  newDiv1.append(newParagraph1);  
  body.append(newDiv1);
}
// document.querySelector('#infoEpisode_3').innerText = (`L'${episode3.title} dure ${episode3.duration} minutes ${hasBeenWatched ? 'Already watched' : 'watched'}`);
// document.querySelector('#infoEpisode_4').innerText = (`L'${episode4.title} dure ${episode4.duration} minutes ${hasBeenWatched ? 'Already watched' : 'Not watched'}`);
// document.querySelector('#infoEpisode_5').innerText = (`L'${episode5.title} dure ${episode5.duration} minutes ${hasBeenWatched ? 'Already watched' : 'watched'}`);

