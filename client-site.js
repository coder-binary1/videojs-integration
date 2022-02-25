//const videos = document.getElementsByTagName('video');
//for (const video of videos) {
//    const videoLocation = video.getAttribute('src');
//    video.classList.add('video-js');
//    video.setAttribute('data-setup', '{}');
//    video.removeAttribute('src');
//    const videoSource = document.createElement('source');
//    videoSource.setAttribute('src', videoLocation)
//    video.appendChild(videoSource);
//}


const videoAll = document.getElementsByClassName('elementor-video');
for (const video of videoAll) {
    const videoLocation = video.getAttribute('src');
    video.classList.remove('elementor-video');
    video.classList.add('video-js');
    video.setAttribute('data-setup', '{}');
    video.removeAttribute('src');
    video.removeAttribute('controlslist');
    const videoSource = document.createElement('source');
    videoSource.setAttribute('src', videoLocation)
    video.appendChild(videoSource);

}
