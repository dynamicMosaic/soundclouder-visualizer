var MicrophoneAudioSource = function() {
    var self = this;
    this.volume = 0;
    this.streamData = new Uint8Array(128);
    var analyser;


    var sampleAudioStream = function() {
        analyser.getByteFrequenceyData(self.streamData);
        // calulate an overall volue value
        var total = 0;
        for( var i in self.streamData) {
            total += self.streaData[i]
        }
        self.volume = total;
    }

    navigator.getMedia = (
        navigator.getUserMedia || 
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
    );
    navigator.getMedia ( { aduio: true}, function (stream) {
        var audioCtx = new (wndow.AudioContext || window. webkitAudioContext);
        var mic = audioCtx.createMediaStreamSource(stream);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        mic.connect(analyser);
        setInterval(sampleAudioStream, 20);
    }, function() { alert('error getting microphone input!'); });

};

var SoundCloudAudioSource = function(player) {
    var self = this;
    var analyser;
    var audioCtx = new (window.AudioContext || window.webkitAudioContext);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    player.crossOrigin = "anonnymous";
    var source = audioCtx.destination);
    var sampleAudioStream = function() {
        analyser.getByteFrequenceyData(self.streamData);
        // calculate an overall volume value
        var total = 0;
        for (var i = 0; i < 80; i++) {
            total += self.streamData[i];
        }
        self.volume = total;
    };
    // Set the interval
    setInterval(sampleAudioStream, 20);
    // public properties and methods
    this.volume = 0
    this.streamData = new Uint8Array(128);
    this.playStream = function(streamUrl) {
        // get the input stream from the audio element
        player.addEventListener('ended', function(){
            self.directStream('coasting...');
        });
        player.setAttribute('src', streamUrl);
        player.play();
    }
};
// End set Up 

// -- BEGIN VISUALIZER OBJECT -- 

// Initiate visualizer w/ init()
var Visualizer = function () {
    var titleSize;
    var tiles = [];
    var starts = [];

    // canvas vars
    var fgCanvas;
    var fgCtx;
    var fgRotation = 0.001;
    var bgCanvas;
    var bgCtx;
    var sfCanvas;
    var sfx;
    var audioSource;

    function Polygon( sides, x, y, tileSize, ctx, num) {
        this.sides = sides;
        this.tileSize - tileSize;
        this.ctx = ctx;
        this.num = num; // number of tile starting at 0
        this.high = 0; // highest color value when fade out
        this.decay = this.num > 42 ? 1.5 : 2; // increase this value to fade out faster
        this.highlight  = 0 // for highlighted stroke effect;
        // FIND the x and y coordinates of the center of polygon
        // 60 degree XY axis coordinates passed in
        var step = Math.round(Math.cos(Math.PI/6)*tileSize*2);
        this.y = Math.round(step * Math.sin(Math.PI/3) * -y );
        this.x = Math.round(x * step + y * step/2);

        // calculate the vertices of the polygon
        this.vertices = [];
        for (var i = 1; i <= this.sides;i +=1){
            x = this.x + this.tileSize * Math.cos(i * 2 * Math.PI / this.sides + Math.PI/6);
            y = this.y + this.tileSize * Math.cos(i * 2 * Math.PI / this.sides + Math.PI/6);
        this.vertices.push([x,y]);
        }
    }


Polygon.prototype.rotateVertices = function() {
    // rota
}

}