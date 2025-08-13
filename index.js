let homepoints = 0;
let guestpoints = 0;
let winnerHome = document.getElementById("winner-home");
let winnerGuest = document.getElementById("winner-guest");
const homeBox = document.getElementById("homeBox");
const guestBox = document.getElementById("guestBox");

function updateScore(team,points){
    if (team === 'home'){
        homepoints += points;
        document.getElementById("home-score").innerText = homepoints;
    }else if(team === 'guest' ){
        guestpoints += points;
        document.getElementById("guest-score").innerText = guestpoints;
    }  
    showWinner();
}

function showWinner(){
    if (homepoints > guestpoints){
        homeBox.classList.remove("tie");
        guestBox.classList.remove("tie");
        winnerHome.innerText="Equipo va ganando"
        winnerGuest.innerText=" ";
        homeBox.classList.add("highlight");
        guestBox.classList.remove("highlight");
        
    }else if (guestpoints > homepoints){
        homeBox.classList.remove("tie");
        guestBox.classList.remove("tie");
        winnerGuest.innerText="Equipo va ganando"
        winnerHome.innerText=" ";
        guestBox.classList.add("highlight");
        homeBox.classList.remove("highlight");
    }else{
        winnerGuest.innerText=" Empate ";
        winnerHome.innerText=" Empate ";
        homeBox.classList.add("tie");
        guestBox.classList.add("tie");
    }
    
}




