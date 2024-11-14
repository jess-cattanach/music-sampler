let audioPlayers = document.querySelectorAll('.soundtrack');
let albumCovers = document.querySelectorAll('.albumcover');
let players = document.querySelectorAll('audio');


function hideAll(){
    audioPlayers.forEach(function(el){
        el.style.display = 'none';
    });
}

hideAll();




albumCovers.forEach(function(el){
    el.onclick = (e) => {
        hideAll();
       
        switch (e.target.getAttribute('id')){
            case 'i-love-you':
                document.querySelector('#sweatherWeather')
                .style.display = 'block'; 
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });                   
                break;
            case 'wiped-out':
                document.querySelector('#ripYouth')
                .style.display = 'block';  
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });                      
                break;
            case 'hard-to-imagine':
                document.querySelector('#softcore')
                .style.display = 'block';  
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });                   
                break;
            case 'chip-chrome':
                document.querySelector('#devilsAdvocate')
                .style.display = 'block'; 
                players.forEach(function(el) {
                    el.pause();
                    el.currentTime = 0;
                });                      
                break;
            }
    }
});