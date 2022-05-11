const siyahi = ['paper.png', 'scissors.png', 'rock.png'];

//DOM Document Object Model

const kagiz = document.getElementById('kagiz');
const qayci = document.getElementById('qayci');
const das = document.getElementById('das');

const komputerSecimi = document.getElementById('komputer-secim');
const neticeniYaz = document.getElementById('netice');

kagiz.onclick = seciminiEle;
qayci.onclick = seciminiEle;
das.onclick = seciminiEle;

function loseGame() {
        document.getElementById("lose").style.display = "block";
        document.getElementById("equal").style.display = "none";
        document.getElementById("victory").style.display = "none";
}

function tryAgainFunction() {
    document.getElementById("equal").style.display = "block";
    document.getElementById("victory").style.display = "none";
    document.getElementById("lose").style.display = "none";
}

function victoryGame() {
    document.getElementById("victory").style.display = "block";
    document.getElementById("equal").style.display = "none";
    document.getElementById("lose").style.display = "none";
}

function seciminiEle(){

    const komputer = randomSecim()
    const secim = this.dataset.id;

    if(komputer == 0 && secim == 0) {
        neticeniYaz.style.borderColor = "black";
        netice = "Yeniden cehd edin :|"
        tryAgainFunction();
       
    }
    else if(komputer ==0 && secim ==1) {
        neticeniYaz.style.borderColor = "green";
        netice = "Tebrikler! Kagiz qaycini kesdiyi ucun qazandin :)"
        victoryGame();
    }
    else if (komputer ==0 && secim ==2) {
        neticeniYaz.style.borderColor = "red";
        netice = "Uduzdun! Kagiz dashi bukur :("
        loseGame();
    }
    else if (komputer ==1 && secim ==0) {
        neticeniYaz.style.borderColor = "red";
        netice = "Uduzdun! Qayci kagizi kesir :("
        loseGame();
    }
    else if (komputer ==1 && secim ==1) {
        neticeniYaz.style.borderColor = "black";
        netice = "Yeniden cehd edin :|"
        tryAgainFunction();
    }
    else if(komputer ==1 && secim ==2) {
        neticeniYaz.style.borderColor = "green";
        netice = "Tebrikler! qazandin dash qaycini sindirir :)"
        victoryGame();
    }
    else if(komputer ==2 && secim ==0) {
        neticeniYaz.style.borderColor = "green";
        netice = "Tebrikler! kagiz dashi bukur :)"
        victoryGame();
    }
    else if (komputer ==2 && secim ==1) {
        neticeniYaz.style.borderColor = "red";
        netice = "Uduzdun! Dash qaycini sindirir :("
        loseGame();

    }
    else {
        neticeniYaz.style.borderColor = "black";
        netice = "Yeniden cehd edin :|"
        tryAgainFunction()

        


    }
    neticeniYaz.innerText = netice; 
}


function randomSecim(){
    const say = Math.round(Math.random()*2);
    komputerSecimi.src = `./images/${siyahi[say]}`
    return say;
}
