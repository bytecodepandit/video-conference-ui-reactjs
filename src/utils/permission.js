export function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.log("error" + err);
    });
}
