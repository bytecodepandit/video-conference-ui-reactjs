export function getLocalStream() {
  try {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
        console.log("hello", stream);
      }).then((stream) => console.log(stream))
      .catch((err) => {
        console.log("error" + err);
      });
    /* use the stream */
  } catch (err) {
    /* handle the error */
  }
}
