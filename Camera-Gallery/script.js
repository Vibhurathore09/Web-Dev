let video = document.querySelector("video");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let recordBtnCont = document.querySelector(".record-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let recordBtn = document.querySelector(".record-btn");
let recordFlag = false;
let captureFlag = false;
let transparentColor = "transparent";

let recorder;
let chunks = [];//Media data in chunks

let constraints = {
    video : true,
    audio : true
}

//navigator -> global , browser info
navigator.mediaDevices.getUserMedia(constraints)
.then((stream) =>{
    video.srcObject = stream;

    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start" , (e) =>{
        chunks = []
    })
    recorder.addEventListener("dataavailable" , (e)=>{
        chunks.push(e.data);
    })
    recorder.addEventListener("stop" , (e)=>{
        //Conversion of media chunks data to video
        let blob = new Blob(chunks , {type : "video/mp4"});
        let videoURL = URL.createObjectURL(blob);

        let a = document.createElement("a");
        a.href = videoURL;
        a.download = "stream.mp4";
        a.click();
    })
})

recordBtnCont.addEventListener("click" ,(e)=>{
    if(!recorder) return ;

    recordFlag = !recordFlag;

    if(recordFlag){ //Start
        recorder.start();
        recordBtn.classList.add("scale-record");
        startTimer();
    }else{//stop
        recorder.stop();
        recordBtn.classList.remove("scale-record");
        stopTimer();
    }
})

captureBtnCont.addEventListener("click" , (e)=>{
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let tool = canvas.getContext("2d");
    tool.drawImage(video, 0 , 0 ,canvas.width , canvas.height);
    //filtering
    tool.fillStyle = transparentColor;
    tool.fillRect(0,0,canvas.width,canvas.height);

    let imageURL = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = imageURL;
    a.download = "image.jpg";
    a.click();

})

let timerID;
let counter = 0; // Represent total seconds
let timer = document.querySelector(".timer");
function startTimer(){
    function displayTimer(){
        timer.style.display = "block";
        let totalSeconds = counter;

        let hours = Number.parseInt(totalSeconds/3600);
        totalSeconds = totalSeconds % 3600;// remaining value

        let minutes = Number.parseInt(totalSeconds/60);
        totalSeconds = totalSeconds % 60; // remaining value

        let seconds = totalSeconds;

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        timer.innerHTML =`${hours}:${minutes}:${seconds}`;

        counter++;
    }

    timerID = setInterval(displayTimer , 1000);
}

function stopTimer(){
    clearInterval(timerID);
    timer.innerText = "00:00:00";
    timer.style.display = "none";
}

//Filtering Logic
let filterLayer = document.querySelector(".filter-layer");
let allFilters = document.querySelectorAll(".filter");
allFilters.forEach((filterElem) =>{
    filterElem.addEventListener("click", (e)=>{
        //get
        transparentColor = getComputedStyle(filterElem).getPropertyValue("background-color");
        filterLayer.style.backgroundColor = transparentColor;
    })
    // filterElem.style.backgroundColor
})

