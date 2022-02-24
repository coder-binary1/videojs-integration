const videos = document.getElementsByTagName('video');
for (const video of videos) {
    const videoLocation = video.getAttribute('src');
    video.classList.add('video-js');
    video.setAttribute('data-setup', '{}');
    video.removeAttribute('src');
    const videoSource = document.createElement('source');
    videoSource.setAttribute('src', videoLocation)
    video.appendChild(videoSource);
}