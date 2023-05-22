const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverElement = document.getElementById('gameOver');
const startScreen = document.getElementById('startScreen');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        gameOverElement.classList.remove('hidden');
    }
};

const loop = setInterval(checkCollision, 10);

const startGame = () => {
    startScreen.style.display = 'none';
};

document.addEventListener('keydown', startGame);
document.addEventListener('keydown', jump);
