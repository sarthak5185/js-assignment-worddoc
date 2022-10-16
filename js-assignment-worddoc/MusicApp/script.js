let trackimg=document.querySelector(".track-image");
let titlep=document.querySelector(".title");
let artistp=document.querySelector(".artist");

let tracktime = document.querySelector(".current-time");
let trackduration = document.querySelector(".duration-time");
let slider = document.querySelector(".duration-slider");
  
let prevbtn=document.querySelector(".prev");
let playbtn=document.querySelector(".play");

let nextbtn=document.querySelector(".next");

let autoplaybtn = document.querySelector(".play-all");


let showvolume = document.querySelector("#show-volume");
let volumeicon = document.querySelector("#volume-icon");
let curvolume = document.querySelector("#volume");

let hamb = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

let musicplaylist = document.querySelector(".music-playlist");
let pdiv = document.querySelector(".playlist-div");
let playlist = document.querySelector(".playlist");

let timer=0;
let autoplay=0;
let indextrack=0;
let isplay=false;
// let ismuted=false;
let track=document.createElement("audio");

playbtn.addEventListener("click",justPlay);
prevbtn.addEventListener("click",prevPlay);
nextbtn.addEventListener("click",nextPlay);

autoplaybtn.addEventListener("click", autoPlayToggle);

volumeicon.addEventListener("click",managemute);
curvolume.addEventListener("change", changeVolume);

slider.addEventListener("change", changeDuration);
track.addEventListener("timeupdate", songTimeUpdate);

// Load Tracks
loadtracks(indextrack);
function loadtracks(indextrack)
{
  clearInterval(timer);
  resetSlider();
  track.src = tracklist[indextrack].path;
  trackimg.src = tracklist[indextrack].img;
  titlep.innerHTML = tracklist[indextrack].name;
  artistp.innerHTML = tracklist[indextrack].singer;
  track.load();
  timer = setInterval(updateSlider, 1000);
}
// next song
function nextPlay()
{
  indextrack=(indextrack+1)%tracklist.length;
  loadtracks(indextrack);
  playSong();
}
// prev song
function prevPlay()
{
  indextrack=(indextrack-1+tracklist.length)%tracklist.length;
  loadtracks(indextrack);
  playSong();
}
// Play song or Pause song
function justPlay()
{
  if(isplay==false)
  {
    playSong();
  }
  else
  {
    pauseSong();
  }
}

// Play song
function playSong()
{
  track.play();
  isplay=true;
  playbtn.innerHTML = '<i class="fas fa-pause"></i>';
}
// Pause song
function pauseSong()
{
  track.pause();
  isplay=false;
  playbtn.innerHTML='<i class="fas fa-play"></i>';
}
// Auto Play
function autoPlayToggle() {
  if (autoplay==0) {
    autoplay=1;
    autoplaybtn.style.background = "#db6400";
    
  } else {
    autoplay = 0;
    autoplaybtn.style.background = "#ccc";
  }
}
// Reste Slider
function resetSlider() {
  slider.value = 0;
}
function managemute()
{
  track.volume = 0;
  showVolume.innerHTML = 0;
  currentVolume.value = 0;
  // if(ismuted==false)
  // {
  //   track.muted=true;
  //   ismuted=true;
  // }
  // else
  // {
  //   track.muted=false;
  //   ismuted=false;
  // }
}
function changeVolume()
{
  showvolume.value = curvolume.value;
  showvolume.innerText=curvolume.value;
  track.volume = curvolume.value / 100;
}
function changeDuration()
{
  let sliderPosition = track.duration * (slider.value / 100);
  track.currentTime = sliderPosition;
}
function updateSlider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    playbtn.innerHTML = '<i class="fas fa-play"></i>';
    if (autoplay == 1)
    {
      indextrack=(indextrack+1)%tracklist.length;
      loadtracks(indextrack);
      playSong();
    } 
  }
}
function songTimeUpdate()
{
  if(track.duration)
  {
    let curmins = Math.floor(track.currentTime / 60);
    let cursecs=Math.floor((track.currentTime)%60);
    let durmins=Math.floor(track.duration/60);
    let dursecs=Math.floor(track.duration%60);
    if (dursecs < 10) {
      dursecs = "0" + dursecs;
    }
    if (durmins < 10) {
      durmins = "0" + durmins;
    }
    if (curmins < 10) {
      curmins = "0" + curmins;
    }
    if (cursecs < 10) {
      cursecs = "0" + cursecs;
    }
    tracktime.innerHTML = curmins + ":" + cursecs;
    trackduration.innerHTML = durmins + ":" + dursecs;
  }
  else 
  {
      tracktime.innerHTML = "00" + ":" + "00";
      trackduration.innerHTML = "00" + ":" + "00";
  }
}