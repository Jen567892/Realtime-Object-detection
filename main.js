img = ""
status = ""
kitties = []

function preload(){

}
 function setup(){
canvas = createCanvas(640, 420)
canvas.center()
 
video = createCapture(VIDEO)
video.hide()


objectDetector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML = "Status : detecting objects..."
 }

 function draw(){
image(video, 0 , 0, 640, 420)
objectDetector.detect(video, gotResult)
 

if(status != ""){
    r = random(255)
    b = random(255)
    g = random(255)

for(i = 0; i < kitties.length; i++){
document.getElementById("status").innerHTML = "Status: kitties detected"
document.getElementById("number_of_objects" ).innerHTML = "Number of objects detected are : " + kitties.length

fill(r, g, b)
percent = floor(kitties[i].confidence * 100)
text(kitties[i].label + "  " + percent + "%", kitties[i].x,kitties[i].y )
noFill()
stroke(r, g, b)
strokeWeight(3)
rect(kitties[i].x,kitties[i].y, kitties[i].width, kitties[i].height)

}
}

 }
 function modelLoaded(){
     console.log("Kitty Loaded!");
     status = true;
 }

 function gotResult(error, results){
     if(error){
         console.log(error)
     }
     else{
         console.log(results)
         kitties = results
     }
 }