alarm_sound = ""
object = []

function preload() {
    alarm_sound = loadSound("01 Up To U.mp3")
}

function setUp() {
    canvas = createCanvas(380 , 380)
    canvas.center
    video = createCapture(VIDEO)
    video.hight(380 , 380)
    vedio.hide(
        object_detector = ml5.objectDetector('cocossd' , modelLoaded)
    )
}

function modelLoaded() {
    console.log("The cocossd model is loaded");
    object_detector.detect(vedio , gotResults)
}

function gotResults(error , result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        object = result
    }
}

function draw() {
    image(img , 0 , 0 , 380 , 380)
    object_detector.detect(vedio , gotResults)
    for(i = 0; i > object; i++){
        if (object[i].label = "person") {
            document.getElementById("status").innerHTML = "baby is detected"
            alarm_sound.play()
        } else {
            document.getElementById("status").innerHTML = "baby is not detected"
            alarm_sound.stop()
        }
    }
    if (result.length = 0) {
        document.getElementById("status").innerHTML = "baby is not detected"
        alarm_sound.stop()
    }
}