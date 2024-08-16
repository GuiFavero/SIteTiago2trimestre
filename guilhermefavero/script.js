const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual sua cor favortita?",
        alternativas: [
            {
                texto: "Branco",
                afirmacao: "Bruno Bucchiarachi"
            },
            {
                texto: "Marrom",
                afirmacao: "Gyro Zeppeli"
            }
            ,
            {
                texto: "Verde",
                afirmacao: "Noriaki Kakyoin"
            },
            {
                texto: "Preto",
                afirmacao: "Okuyasu Nijimura"
            }
        ]
    },
    {
        enunciado: "O que mais gosta de fazer?",
        alternativas: [
            {
                texto: "Viajar com os amigos",
                afirmacao: "Noriaki Kakyoin"
            },
            {
                texto: "Andar a cavalo",
                afirmacao: "Gyro Zeppeli"
            }
            ,
            {
                texto: "Gastar",
                afirmacao: "Okuyasu Nijimura"
            },
            {
                texto: "Pescar",
                afirmacao: "Bruno Bucchiarachi"
            }
        ]
    },
    {
        enunciado: "qual sua comida favorita?",
        alternativas: [
            {
                texto: "Macarrão com tinta de lula",
                afirmacao: "Okuyasu Nijimura"
            },
            {
                texto: "Cereja",
                afirmacao: "Noriaki Kakyoin"
            }
            ,
            {
                texto: "Buccellati",
                afirmacao: "Bruno Bucchiarachi"
            },
            {
                texto: "Pizza de mussarela",
                afirmacao: "Gyro Zeppeli"
            }
        ]
    },
    {
        enunciado: "qual seu animal favorito?",
        alternativas: [
            {
                texto: "cachorro pug",
                afirmacao: "Noriaki Kakyoin"
            },
            {
                texto: "Tartaruga",
                afirmacao: "Bruno Bucchiarachi"
            }
            ,
            {
                texto: "Peixe",
                afirmacao: "Okuyasu Nijimura"
            },
            {
                texto: "Cavalo",
                afirmacao: "Gyro Zeppeli"
            }
        ]
    },
    {
        enunciado: "Qual sua banda de rock favorita?",
        alternativas: [
            {
                texto: "The Hand",
                afirmacao: "Okuyasu Nijimura"
            },
            {
                texto: "hierophant green",
                afirmacao: "Noriaki Kakyoin"
            }
            ,
            {
                texto: "Sticky Fingers",
                afirmacao: "Bruno Bucchiarachi"
            },
            {
                texto: "Ballbreaker ",
                afirmacao: "Gyro Zeppeli"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "jotaro";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
