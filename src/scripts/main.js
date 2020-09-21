'use strict';

function startVideo(event) {
  const playButton = event.target;

  playButton.style.visibility = 'hidden';
  playButton.parentNode.style.visibility = 'hidden';
  playButton.closest('#presentation-section').firstElementChild.play();
}

function stopVideo(event) {
  const video = event.target;

  video.pause();
  video.nextElementSibling.style.visibility = 'visible';
  video.nextElementSibling.firstElementChild.style.visibility = 'visible';
}

document.addEventListener('click', (event) => {
  if (event.target.className === 'presentation__play') {
    startVideo(event);
  }

  if (event.target.className === 'presentation__video') {
    stopVideo(event);
  }
});
