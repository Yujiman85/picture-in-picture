const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Async function prompting user to select media stream, pass to video element and play video
aynsc function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    } catch(error) {

    }
}