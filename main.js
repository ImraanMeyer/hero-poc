
const video = document.getElementById('heroVideo');
const toggleButton = document.getElementById('videoToggle');

toggleButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    toggleButton.textContent = '⏸️';
    toggleButton.setAttribute('aria-label', 'Pause video');
  } else {
    video.pause();
    toggleButton.textContent = '▶️';
    toggleButton.setAttribute('aria-label', 'Play video');
  }
});
