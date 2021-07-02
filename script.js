const videoElement = document.getElementById("video");
const button= document.getElementById("button");

//todo
//async function to pass media
//prompt to select media stream, pass to video element, then play


//Screen Capture API

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    } catch (error) {
        // catch errors
        console.log("Woops, error here: " , error)
    }
}


button.addEventListener('click', async()=> {
    //disable the button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;

});


//on load
selectMediaStream()