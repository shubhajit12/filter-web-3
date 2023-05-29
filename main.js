nosex=0;
nosey=0;
function preload(){
    mustache=loadImage("m (1).png");
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function draw(){
   image(video,0,0,300,300);
   image(mustache,nosex-20,nosey,50,30);
}
function take_snapshot(){
    save("filter.png");
}
function modelloaded(){
    console.log("modelloded");
}
function gotposes(results){
   if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log(nosex,nosey);
   }
}