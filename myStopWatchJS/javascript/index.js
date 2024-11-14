const display = document.getElementById('display');
let timer =  null;
let startTime = 0;
let timeInterval = 0;
let inFunction = false;

function start(){
    if(!inFunction){
        startTime = Date.now() - timeInterval;
        timer = setInterval(update, 10);
        inFunction = true;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    timeInterval = 0;
    inFunction = false;
    display.textContent = '00:00:00';
}

function stop(){
    if(inFunction){
        clearInterval(timer);
        timeInterval = Date.now() - startTime;
        inFunction = false;
    }
}

function update(){
    const now = Date.now();
    timeInterval = now -startTime;

    let minutes = Math.floor(timeInterval / (1000 * 60) % 60);
    let seconds = Math.floor(timeInterval / 1000 % 60);
    let millisecond = Math.floor(timeInterval % 1000 / 10);

    minutes =  String(minutes).padStart(2, '0'); 
    seconds =  String(seconds).padStart(2, '0'); 
    millisecond =  String(millisecond).padStart(2, '0'); 

    display.textContent = minutes + ':' + seconds + ':' + millisecond
}