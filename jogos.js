//Nome jogador
var nome = prompt("Infome o nome do Jogador: ");

var hora = 0;
var min = 0;
var seg = 0;

let tempo = 1000;
var cron;


var flag =false;
//Jogo
var px = 300;
var py = 300;

var pontos = 0;
var nivel = 1;

function load() {
    document.addEventListener("keydown", tecla);
    
}

function novaMoeda() {
    var nMoeda = document.getElementById("moeda");

    nMoeda.style.top = (Math.floor(Math.random() * 59) * 10 + 140) + "px";
    nMoeda.style.left = (Math.floor(Math.random() * 179) * 10 + 10) + "px";
}
    

function tecla() {
    var jg = document.getElementById("jogador");

    var ps = document.getElementById("moeda").getBoundingClientRect();



    var tecla = event.keyCode;

    

    if (tecla == 37 && px > 20) {
        //Esquerda
        px -= 10;
        jg.style.left = px + "px";
    } else if (tecla == 39 && px < 1800) {
        //Direita
        px += 10;
        jg.style.left = px + "px";
    }
    if (tecla == 38 && py > 140) {
        //Cima
        py -= 10;
        jg.style.top = py + "px";
        76;
    } else if (tecla == 40 && py < 730) {
        //baixo
        py += 10;
        jg.style.top = py + "px";
    }

    // Contagem pontos
    if (
        px >= ps.x &&
        px <= ps.x + 80 &&
        py >= ps.y &&
        py <= ps.y + 80
    ) {
        pontos++;
        novaMoeda();
        
    }

    //Verificando P2
    if (
        px + 80 >= ps.x &&
        px + 80 <= ps.x + 80 &&
        py >= ps.y &&
        py <= ps.y + 80
    ) {
        pontos++;
        novaMoeda();
    }

    //Verificando P3
    if (
        px >= ps.x &&
        px <= ps.x + 80 &&
        py + 80 >= ps.y &&
        py + 80 <= ps.y + 80
    ) {
        pontos++;
        novaMoeda();
    }

    //Verificando P4
    if (
        px + 80 >= ps.x &&
        px + 80 <= ps.x + 80 &&
        py + 80 >= ps.y &&
        py + 80 <= ps.y + 80
    ) {
        pontos++;
        novaMoeda();
    }

    //Apresentar resultado
    document.getElementById("Result").innerHTML = pontos;

    //Nome do Jogador ativado pela tecla
    document.getElementById("tcl").innerHTML = "Jogador: " + nome;

    
    if (pontos == 2 && !flag) {
        document.getElementById("nivel").innerHTML = "Fase: 2";
        flag = true;
        
    }
    if (pontos == 1 ) {
            start();
    }
    

    if (pontos == 5) {       
        alert (" 51 é pinga");
        clearInterval(cron);
    }

}

function start() {
    cron = setInterval(() => {time();}, tempo);
}


function stop() {
    clearInterval(cron);
    hora = 0;
    min = 0;
    seg = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function time() {
    seg++;

    if (seg == 60) {
        seg = 0;
        min++;

        if (min == 60) {
            min = 0;
            hora++;
        }
    }

    var format = (hora < 10 ? '0' + hora : hora) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('counter').innerText = format;

}




// document.getElementById("tcl").innerHTML = "Código Tecla=" + tecla + " Pos x=" + px + "   Pos y=" + py +
//     "     Pontos = " + pontos;



window.addEventListener("load", load);