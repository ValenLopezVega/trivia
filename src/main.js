function greet() {
  let selected1 = document.querySelector('input[type=radio][name=question1]:checked');

  let selected2 = document.querySelector('input[type=radio][name=question2]:checked');

  let selected3 = document.querySelector('input[type=radio][name=question3]:checked');

  alert(`Usted seleccionó ${selected1.value} , ${selected2.value} y ${selected3.value}`);
}

const playGame = () => {
  let name = document.getElementById('name').value;
  document.getElementById('questions').style.display = 'block';
  document.getElementById('intro').style.display = 'none';
  document.getElementById('welcomeMsg').textContent = `Hola ${name}`;
}

const restart = () => {
  document.getElementById('questions').style.display = 'none';
  document.getElementById('intro').style.display = 'block';
}

const playBtn = document.getElementById('playGameBtn');
playBtn.addEventListener('click', () => {
  playGame();
})

const restartBtn = document.getElementById('restartGameBtn');
restartBtn.addEventListener('click', () => {
  restart();
})

const verifyBtn = document.getElementById('verifyAnswersBtn');
verifyBtn.addEventListener('click', () => {
  greet();
})
