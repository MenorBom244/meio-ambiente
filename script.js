const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a maneira mais eficaz de reduzir a quantidade de plástico que você usa no dia a dia?",
        alternativas: [
            {
                texto: "Usar sacolas plásticas descartáveis.",
                afirmacao: "Usar sacolas plásticas descartáveis contribui para o aumento do lixo plástico no meio ambiente. "
            },
            {
                texto: "Usar sacolas reutilizáveis.",
                afirmacao: "Usar sacolas reutilizáveis ajuda a reduzir a quantidade de plástico descartado, contribuindo para um meio ambiente mais limpo."
            }
        ]
    },
    {
        enunciado: "O que é melhor para o meio ambiente em relação ao consumo de água?",
        alternativas: [
            {
                texto: "Tomar banhos longos.",
                afirmacao: "Tomar banhos longos desperdiça água, um recurso precioso."
            },
            {
                texto: "Tomar banhos curtos.",
                afirmacao: "Tomar banhos curtos ajuda a economizar água, beneficiando o meio ambiente."
            }
        ]
    },
    {
        enunciado: "Qual é a melhor prática para o descarte de resíduos orgânicos?",
        alternativas: [
            {
                texto: "Jogar no lixo comum.",
                afirmacao: "Jogar resíduos orgânicos no lixo comum contribui para a superlotação dos aterros sanitários."
            },
            {
                texto: "Fazer compostagem.",
                afirmacao: "Fazer compostagem transforma resíduos orgânicos em adubo, reduzindo o lixo e enriquecendo o solo."
            }
        ]
    },
    {
        enunciado: "Como você pode reduzir o consumo de energia em casa?",
        alternativas: [
            {
                texto: "Desligar os aparelhos eletrônicos quando não estão em uso.",
                afirmacao: "Desligar os aparelhos eletrônicos quando não estão em uso economiza energia e reduz a pegada de carbono."
            },
            {
                texto: "Deixar os aparelhos eletrônicos ligados quando não estão em uso.",
                afirmacao: "Deixar os aparelhos eletrônicos ligados desperdiça energia, aumentando a pegada de carbono."
            }
        ]
    },
    {
        enunciado: "Qual é uma maneira sustentável de se locomover pela cidade?",
        alternativas: [
            {
                texto: "Usar carro próprio para todos os trajetos.",
                afirmacao: "Usar carro próprio para todos os trajetos aumenta a emissão de gases poluentes."
            },
            {
                texto: "Utilizar transporte público, bicicleta ou caminhar.",
                afirmacao: "Utilizar transporte público, bicicleta ou caminhar reduz a emissão de gases poluentes e melhora a qualidade do ar."
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
    caixaPerguntas.textContent = "Suas escolhas afetam o futuro!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
