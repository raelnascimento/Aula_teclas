const celulas = document.querySelectorAll(".celula");
var checarTurno = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

const COMBINACOES = [
    (0, 1, 2),
    (3, 4, 5),
    (6, 7, 8),
    (0, 3, 6),
    (1, 4, 7),
    (2, 5, 8),
    (0, 4, 8),
    (2, 4, 6)
];



document.addEventListener("click", (event) => {
    if (event.target.matches(".celula")) {
        jogar(event.target.id);
    }


});

function jogar(id) {
    const celula = document.getElementById(id);
    if (checarTurno) {
        turno = JOGADOR_X;
        checarTurno = false;
    } else {
        turno = JOGADOR_O;
        checarTurno = true;
    }
    celula.textContent = turno;
    celula.classList.add(turno);
    checaVencedor(turno);
    
    
}

function checaVencedor(turno) {
    const vencedor = COMBINACOES.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        })

    });


    if (vencedor) {
        encerrajogo(turno);
    } else if (checaEmpate) {
        encerrajogo();
    } else {
        checarTurno = !checarTurno;
    }
}

function checaEmpate() {
    let X = 0;
    let O = 0;

    for (index in celulas) {
        if (!isNaN(index)) { 
            if (celulas[index].classList.contains(JOGADOR_X)) {
                X++;
            }
            if (celulas[index].classList.contains(JOGADOR_O)) {
                O++;
            }
        }

    }

    return X + O == 9 ? true : false;
}


function encerrajogo(vencedor = null) {

  if (vencedor) {
       console.log("Vencedor: " + vencedor);
    } else {
        console.log("Empatou") ;
    }




    // const telaEscura = document.getElementById("tela-escura");
    // const h2 = createChild("h2");
    // const h3 = createChild("h3");
    // let mensagem = null;

    // telaEscura.style.display = "block";
    // telaEscura.appendChild(h2);
    // telaEscura.appendChild(h3);


    // if (vencedor) {
    //     h2.innerHTML = "O Player <span>" + (vencedor) +"</span> venceu";
    // } else {
    //     h2.innerHTML = "Empatou";
    // }

    let contador = 3;
    setInterval(() => {
        h3.innerHTML = "Reiniciando em " + contador;
    }, 1000);

    setTimeout(() => location.reload(), 4000);
}