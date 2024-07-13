


let Index = 0;
let audioElement = new Audio("songs/first1.mp3");
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let masterSongName = document.getElementById('masterSongName');



let songs = [{
    songName : "KAM 25 BY DIVINE", filePath : "songs/first1.mp3", coverPath :"covers/first.jpg"
},
{
    songName : "Machayenge BY EMIWAY BANTAI", filePath : "songs/first2.mp3", coverPath :"covers/second.jpg"
},
{
    songName : "Mirage By Dino James", filePath : "songs/first3.mp3", coverPath :"covers/third.jpg" 
},
{
    songName : "Sheikh Chilli by Raftaar", filePath : "songs/first4.mp3", coverPath:"covers/fourth.jpg" 
},
{
    songName : "Maharani By ARPIT BALA", filePath : "songs/first5.mp3", coverPath:"covers/fifth.jpg"
},
{
    songName : "Mera Bhai BY DIVINE", filePath : "songs/first6.mp3", coverPath:"covers/sixth.jpg"
},
{
    songName : "Aisa kuch shot nhi hae BY EMIWAY BANTAI", filePath : "songs/first7.mp3", coverPath:"covers/seventh.jpg" 
},
{
    songName : "ADAKARI BY VJ DK", filePath : "songs/first8.mp3", coverPath:"covers/eight.jpg"
},
    
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();

masterPlay.addEventListener('click',()=> {
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        

    }
})

audioElement.addEventListener('timeupdate',() => {
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
})


progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value *audioElement.duration /100 ;

})

makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=> {
      makeAllPlays();
        Index = e.target.id; 
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `songs/first${Index}.mp3`;
      masterSongName.innerText = songs[Index-1].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause')

        

    })
})

document.getElementById('next').addEventListener('click', () => {
    if(Index>9) {
        Index = 0

    }
    else {
        Index +=1;

    }
    audioElement.src = `songs/first${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})


document.getElementById('previous').addEventListener('click', () => {
    if(Index<=0) {
        Index = 0

    }
    else {
        Index -=1;

    }
    audioElement.src = `songs/first${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})