const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Async function prompting user to select media stream, pass to video element and play video
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        // Returns true when video is fully loaded
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {

    }
}

// On Load
selectMediaStream();