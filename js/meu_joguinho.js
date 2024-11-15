const mario = document.querySelector (`#mario`)

const pipe = document.querySelector (`#pipe`)



const jump = () => {

    mario.classList.add (`jump`)

    setTimeout (() => {

        mario.classList.remove (`jump`)

    }, 700)

    /* Os comandos acima correspondem à animação de pulo do Mário, onde o método "add" irá adicionar a classe "jump" no elemento "mario" sempre que uma tecla for pressionada e, o método "remove" irá remover a classe em um periodo de 700ms após a tecla ser pressionada!!
    
        Nota-se que, 700ms é o tempo exato que leva a animação de pulo do Mário, ou seja.. basicamente, o método "setTimeout" será acionado sempre quando o Mário chegar ao chão, o que possibilita uma nova animação de pulo quando os 700ms terminarem!!
    
    */

}



const loop = setInterval (() => {

    const pipePosition = pipe.offsetLeft

    const marioPosition = +window.getComputedStyle (mario).bottom.replace (`px`, ``)
    /* Alguns pontos importantes aqui..
    
        - O método "getComputedStyle" serve para obter os valores do CSS computados de um elemento HTML, ou seja, da página;

        - A propriedade "bottom" corresponde aos valores computados da página mas, apenas os valores de baixo do elemento;

        - O método "replace" serve para substituir partes de uma string por outras, ou seja.. nesse caso, será substituido o "px" ou "";

        - O sinal de "+" antes do comando serve para converter um elemento string por um elemento number (sim, isso eu não sabia.. 🤔)!!
    
    */

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = `none`

        pipe.style.left = `${pipePosition}px`



        mario.style.animation = `none`

        mario.style.bottom = `${marioPosition}px`



        mario.src = `imagens/game-over.png`

        mario.style.width = `80px`

        mario.style.marginLeft = `50px`

        /* Temos mais alguns pontos para ressaltar..

            - O "pipePosition" se baseia na largura do elemento "pipe", onde "120" corresponte ao INÍCIO do elemento em pixels e, "0" corresponde ao FIM do elemento em pixels, fora que, o "80" indicado no comando corresponde à altura do elemento em pixels..

            Basicamente, quando o "pipePosition" for MENOR ou IGUAL a "120px" e, quando o "pipePosition" for MAIOR que "0px", a animações dos elementos "pipe" e "mario" serão retirados e, os elementos ficarão na posição em que a animação foi retirada; isso também se aplica quando o "marioPosition" for MENOR que "80px"..

            Nota-se que, visualmente, a animação irá correr até que os elementos de choquem e, quando isso ocorrer, a animação chegará ao fim, ou seja.. Game Over!! 😥

            Ah.. quando der Game Over, a imagem do Mário será alterada pelo comando "mario.src", além de passar pelo tratamento de largura e de margem esquerda!!

        */

        clearInterval (loop)

    }

}, 10)



document.addEventListener (`keydown`, jump)