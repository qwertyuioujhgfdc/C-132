prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 

 function modelLoaded() {
    console.log('Model Loaded')
 }

 function check() 
 var result = check(5);
 console.log(result);

 
 function gotResult(error, results)
if (error) {
    console.error(error);
} else {
    console.log(results);
}