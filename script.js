document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  const speed = document.querySelector(".speed");
  const speedBar = document.querySelector(".speed-bar");

  function handleSpeedChange(event) {
    const y = event.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;
    const min = 0.5;
    const max = 2;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    
    speedBar.style.height = height;
    speedBar.textContent = playbackRate.toFixed(2) + "×";
    video.playbackRate = playbackRate;
  }

  speed.addEventListener("mousemove", handleSpeedChange);
});
