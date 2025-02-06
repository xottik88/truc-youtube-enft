let audio = document.getElementById("audio");
let progressBar = document.querySelector(".progress-bar");
let currentTimeEl = document.getElementById("total-time");

audio.onloadedmetadata = () => {
    totalTimeEl.innerText = formatTime(audio.duration)
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

audio.ontimeupdate = () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeEl.innerText = formatTime(audio.currentTime);
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function setProgress(event) {
    let width = event.currentTarget.clientWidth;
    let clickX = event.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}
