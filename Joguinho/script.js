const item = document.getElementsByTagName('img');
let enemy = document.querySelectorAll('.options-enemy img');

// mensagem dos jogadores
let optPlayer = '';
let optEnemy = '';
let endGameMsg = '';

// pontuação dos jogadores
let playerPoints = 0;
let enemyPoints = 0;

function game() {
  switch (optPlayer) {
    case 'papel':
      switch (optEnemy) {
        case 'pedra':
          endGameMsg = 'Você venceu!';
          break;
        case 'tesoura':
          endGameMsg = 'Você perdeu!';
          break;
        case 'papel':
          endGameMsg = 'Empate!';
          break;
      }
      break;
    case 'pedra':
      switch (optEnemy) {
        case 'pedra':
          endGameMsg = 'Empate!';
          break;
        case 'tesoura':
          endGameMsg = 'Você venceu!';
          break;
        case 'papel':
          endGameMsg = 'Você perdeu!';
          break;
      }
      break;
    case 'tesoura':
      switch (optEnemy) {
        case 'pedra':
          endGameMsg = 'Você perdeu!';
          break;
        case 'tesoura':
          endGameMsg = 'Empate!';
          break;
        case 'papel':
          endGameMsg = 'Você venceu!';
          break;
      }
      break;
    default:
      console.log('Escolha uma opção válida.');
      break;
  }

  setTimeout(() => {
    swal(endGameMsg);
  }, '400');
}

function opacityClean() {
  for (let i = 0; i < item.length; i++) {
    item[i].style.opacity = 0.3;
  }
}

function ResetEnemy() {
  for (let i = 0; i < enemy.length; i++) {
    enemy[i].style.opacity = 0.3;
  }
}

function enemyplay() {
  let rand = Math.floor(Math.random() * 3);

  const enemy = document.querySelectorAll('.options-enemy img');
  ResetEnemy();
  for (let i = 0; i < enemy.length; i++) {
    if (i == rand) {
      enemy[i].style.opacity = 1;
      optEnemy = enemy[i].getAttribute('id');
    }
  }
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function (t) {
    let isPlayer = t.target.closest('.options-player .player-imgs') != null;
    if (isPlayer) {
      opacityClean();
      t.target.style.opacity = 1;
      optPlayer = t.target.getAttribute('id');
      enemyplay();
      game();
    }
  });
}
