noseX=0;
noseY=0;
function preload() {
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}g

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResult);
}

function modelLoaded()
{
    console.log("poseNet model is loaded");
}

function gotResult(result)
{
    if(result.length>0)
    {
        console.log(result);
        console.log("noseX= " + result[0].pose.nose.x);
        console.log("noseY= " + result[0].pose.nose.y);
        noseX=result[0].pose.nose.x-40;
        noseY=result[0].pose.nose.y;
    }

}



function draw() {
image (video,0,0,300,300);
// circle(noseX,noseY,20);
// fill("red");
// stroke("black");
image(img,noseX,noseY,80,35)
}

function take_snapshot() {
    save('myFilterImage.png');
}