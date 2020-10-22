let dados = [];
let contenedorDados = document.getElementById("contenedorDados");
let dadosSeleccionados = [];
let contTiros = 0;
let jugador;

function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function tirarDados() {
    if (dadosSeleccionados.length === 0) {
        dadosSeleccionados = [0, 1, 2, 3, 4];
    }
    dadosSeleccionados.forEach(indice => {
        dados[indice] = tirarDado();
    });
    jugador = (Math.floor(Math.random() * 2));
    mostrarDados();
}

function mostrarDados() {
    dadosSeleccionados = [];
    contenedorDados.innerHTML = null;
    for (let i = 0; i < 5; i++) {
        let dado = document.createElement("div");
        let imgdado = document.createElement("img");
        imgdado.setAttribute("src", "assets/img/dados" + dados[i] + ".png");
        imgdado.setAttribute("data-dado-index", i);
        dado.appendChild(imgdado);
        contenedorDados.appendChild(dado);

        imgdado.onclick = evt => {
            let dadoSeleccionado = parseInt(evt.target.getAttribute("data-dado-index"));
            if (dadosSeleccionados.indexOf(dadoSeleccionado) === -1) {
                dadosSeleccionados.push(dadoSeleccionado);
                evt.target.classList.add("seleccionado");
            } else {
                dadosSeleccionados.splice(dadosSeleccionados.indexOf(dadoSeleccionado), 1);
                evt.target.classList.remove("seleccionado");
            }
        };
    }
    contTiros++;
    console.log(contTiros);
    if (contTiros === 3) {
        contTiros = 0;
        if (jugador === 1) {
            jugador = 0;
            console.log("jugador 0");
        } else {
            jugador=1;
            console.log("jugador 1");
        }
    }
}