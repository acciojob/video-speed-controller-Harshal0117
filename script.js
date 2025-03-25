const video = document.getElementById('video');
const playerButton = document.getElementById('player__button');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const progressFilled = document.querySelector('.progress__filled');

video.volume = volumeInput.value;

playerButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playerButton.textContent = '►';
    }
});

volumeInput.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

playbackSpeedInput.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

rewindButton.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
});

forwardButton.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

