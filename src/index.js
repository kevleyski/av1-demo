//const videojs = require('video.js').default;
//require('!style-loader!css-loader!video.js/dist/video-js.css');
require('./dash.all.min.js');

let FakeDash = require('./fakedash.js');

console.log('hello world');

const output = document.getElementById('output');

//videojs.log.level('debug');

let video;

let segmentSizes = [];
function updateBandwidth() {
    let ratio = 24 / 33;
    let segment = Math.trunc(video.currentTime * ratio); // hackkkkk
    let len = segmentSizes[segment] * ratio;

    if (len) {
        let bw = Math.round(len * 8 / 1000) + 'kbits/s';
        document.getElementById('bw').textContent = bw;
    }
}

function showVideo(url) {
    if (video) {
        return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.textContent = url;

    output.className = '';
    output.textContent = '';

    video = document.createElement('video');
    video.width = 1280;
    video.height = 720;
    video.controls = true;
    video.playsInline = true;
    video.muted = true;

    output.className = 'player';
    output.appendChild(link);

    const div = document.createElement('div');
    output.appendChild(div);
    div.appendChild(video);


    if (navigator.userAgent.match(/Safari/)) {
        let fd = new FakeDash(video, url);
        video = fd.ogv;
        fd.load();
        fd.onsegmentloaded = (arr) => {
            let len = arr.byteLength;
            segmentSizes.push(len);
        };
        video.addEventListener('loadedmetadata', () => {
            let res = `${video.videoWidth}x${video.videoHeight}`;
            document.getElementById('res').textContent = res;
        });
    } else {
        let mp = dashjs.MediaPlayer().create();
        mp.initialize(video, url, true /* autoplay */);
        mp.on('fragmentLoadingCompleted', (event) => {
            //console.log(event);
            if (event.response) {
                let len = event.response.byteLength;
                let index = event.request.startTime; // hack
                segmentSizes[index] = len;
            }
        });
        mp.on('qualityChangeRendered', (event) => {
            //let qual = event.newQuality;
            let res = `${video.videoWidth}x${video.videoHeight}`;
            document.getElementById('res').textContent = res;
        });
    }
    video.addEventListener('timeupdate', () => {
        updateBandwidth();
    });
}

function awaitVideo(url) {
    fetch(url).then((response) => {
        if (response.status == 404) {
            setTimeout(() => {
                awaitVideo(url);
            }, 250);
        } else {
            showVideo(url);
        }
    });
}

function awaitEncoding() {
    awaitVideo('output/dash-stream-0.mpd');
}

awaitEncoding();
