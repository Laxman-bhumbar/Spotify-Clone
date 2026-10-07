let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar")
let gif = document.getElementById("gif");
let mastsongname = document.getElementById("mastsongname");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {
        songName: "Let Me Love You",
        filepath: "song/1.mp3",
        coverpath: "cover/1.jpg"
    },

    {
        songName: "Tum Se Hi",
        filepath: "song/2.mp3",
        coverpath: "cover/2.jpg"
    },

    {
        songName: "Apna Bana Le",
        filepath: "song/3.mp3",
        coverpath: "cover/3.jpg"
    },

    {
        songName: "Ocean Eyes",
        filepath: "song/4.mp3",
        coverpath: "cover/4.jpg"
    },

    {
        songName: "Broken Hearts",
        filepath: "song/5.mp3",
        coverpath: "cover/5.jpg"
    },

    {
        songName: "City Lights",
        filepath: "song/6.mp3",
        coverpath: "cover/6.jpg"
    },

    {
        songName: "Golden Hour",
        filepath: "song/7.mp3",
        coverpath: "cover/7.jpg"
    },

    {
        songName: "Dancing Alone",
        filepath: "song/8.mp3",
        coverpath: "cover/8.jpg"
    },

    {
        songName: "Forever Young",
        filepath: "song/9.mp3",
        coverpath: "cover/9.jpg"
    },

    {
        songName: "Salam-e-Ishq",
        filepath: "song/10.mp3",
        coverpath: "cover/10.jpg"
    }
];

songItems.forEach((Element, i)=> {
    console.log(Element, i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    Element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click" , ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-stop");
        gif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-stop");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener("change" , ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
        element.classList.remove("fa-circle-stop");
        element.classList.add("fa-circle-play");
    });
};

Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-stop");
        audioElement.src = `song/${songIndex + 1}.mp3`;
        mastsongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-stop");
    });
});

document.getElementById("next").addEventListener("click" , ()=>{
    if(songIndex>=9) {
        songIndex = 0
    } else{
        songIndex += 1 ;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    mastsongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-stop");
})

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    mastsongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-stop");
});