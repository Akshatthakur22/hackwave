let localStream;
let remoteStream;
let pc;

async function start() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localStream = stream;
    document.getElementById('localVideo').srcObject = stream;
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    createPeerConnection();
    addLocalTracks();
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

function stop() {
  if (pc) {
    pc.close();
    pc = null;
  }
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    localStream = null;
  }
  if (remoteStream) {
    document.getElementById('remoteVideo').srcObject = null;
    remoteStream = null;
  }
  document.getElementById('startButton').disabled = false;
  document.getElementById('stopButton').disabled = true;
}

function createPeerConnection() {
  pc = new RTCPeerConnection();

  pc.ontrack = event => {
    remoteStream = event.streams[0];
    document.getElementById('remoteVideo').srcObject = remoteStream;
  };
}

function addLocalTracks() {
  localStream.getTracks().forEach(track => pc.addTrack(track, localStream));
}
