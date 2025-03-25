document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".viewer");
  const playButton = document.querySelector(".player__button");
  const volumeControl = document.querySelector(".volume");
  const speedControl = document.querySelector(".playbackSpeed");
  const rewindButton = document.querySelector(".rewind");
  const forwardButton = document.querySelector(".forward");
  const progress = document.querySelector(".progress");
  const progressFilled = document.querySelector(".progress__filled");

  function togglePlay() {
    video[video.paused ? "play" : "pause"]();
  }

  function updateButton() {
    playButton.textContent = video.paused ? "►" : "❚ ❚";
  }

  function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
  }

  function scrub(event) {
    const newTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
  }

  function changeVolume() {
    video.volume = volumeControl.value;
  }

  function changeSpeed() {
    video.playbackRate = speedControl.value;
  }

  function rewind() {
    video.currentTime = Math.max(0, video.currentTime - 10);
  }

  function forward() {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
  }

  // Event Listeners
  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", updateProgress);
  playButton.addEventListener("click", togglePlay);
  volumeControl.addEventListener("input", changeVolume);
  speedControl.addEventListener("input", changeSpeed);
  rewindButton.addEventListener("click", rewind);
  forwardButton.addEventListener("click", forward);

  // Allow scrubbing with mouse drag
  let isScrubbing = false;
  progress.addEventListener("mousedown", (e) => {
    isScrubbing = true;
    scrub(e);
  });
  progress.addEventListener("mousemove", (e) => isScrubbing && scrub(e));
  document.addEventListener("mouseup", () => (isScrubbing = false));
});

