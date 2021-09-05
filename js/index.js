const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');


$play.addEventListener('click', handleplay)
function handleplay(){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('le diste click al botón de play');
}

$pause.addEventListener('click', handlepause)
function handlepause(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log('le diste click al botón de pausa');
}

$backward.addEventListener('click', handlebackward)
function handlebackward(){
    $video.currentTime -= 10;
    console.log('Para atras 10 segundos', $video.currentTime);
}

$forward.addEventListener('click', handleforward)
function handleforward(){
    $video.currentTime += 10;
    console.log('Para adelante 10 segundos', $video.currentTime);
}


const $progress = document.querySelector('#progress');

$video.addEventListener('loadedmetadata', handleloaed)
function  handleloaed(){
    $progress.max = $video.duration; 
    console.log('Ha cargado mi video');
}

$video.addEventListener('timeupdate', handletime)
function  handletime(){
    $progress.value = $video.currentTime;
    //console.log('Hola', $video.currentTime);
}

$progress.addEventListener('input', handleinput)
function handleinput(){
    $video.currentTime = $progress.value;
    console.log($progress.value);
}


