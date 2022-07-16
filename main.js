function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassiifier("https://teachablemachine.withgoogle.com/models/r8Dh8eFQk/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}