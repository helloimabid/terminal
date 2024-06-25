function getLocalIP(callback) {
    // Create an RTCPeerConnection object
    var pc = new RTCPeerConnection({iceServers: []});
    var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;

    // Create a data channel
    pc.createDataChannel('');

    // Create an offer and set the local description
    pc.createOffer()
        .then(sdp => pc.setLocalDescription(sdp))
        .catch(error => console.error(error));

    // Listen for ICE candidates
    pc.onicecandidate = function(event) {
        if (event && event.candidate && event.candidate.candidate) {
            var candidate = event.candidate.candidate;
            var ipMatch = ipRegex.exec(candidate);
            if (ipMatch) {
                var ipAddress = ipMatch[1];
                callback(ipAddress);
                pc.onicecandidate = null; // Stop listening for further candidates
            }
        }
    };
}

// Usage example
getLocalIP(function(ipAddress) {
    console.log('User IP Address:', ipAddress);
});