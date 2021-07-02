# Picture in Picture for single monitor users.

A simple html,css and js project. 

**_Built using:_** :
###### Screen Capture API

> The Screen Capture API is relatively simple to use. Its sole method is MediaDevices.getDisplayMedia(), whose job is to ask the user to select a screen or portion of a screen to capture in the form of a MediaStream. To start capturing video from the screen, you call getDisplayMedia() on the instance of Media navigator.mediaDevices:

```
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
```
        
[Live Preview](https://marufsiddique01.github.io/picture-in-picture/)
