const play = document.getElementById('playAudio');
const sound = document.getElementById('sound');
var check = 0;

function playAudio(){
    play.addEventListener("click",function(){
       if(check == 0) {
            check = 1;
            sound.play();
            play.innerHTML = `<i class="fa-solid fa-pause"></i>` ;
       }else{
            check = 0;
            sound.pause();
            play.innerHTML = `<i class="fa-solid fa-play">` ;
       }    
    });
}

playAudio();