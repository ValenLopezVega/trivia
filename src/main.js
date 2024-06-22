const playGame = () => {
  let name = document.getElementById('name').value;
  document.getElementById('questions').style.display = 'block';
  document.getElementById('intro').style.display = 'none';
  document.getElementById('welcomeMsg').textContent = `Hola ${name}`;
}

function verify() {
  let selected1 = document.querySelector('input[type=radio][name=question1]:checked');
  let selected2 = document.querySelector('input[type=radio][name=question2]:checked');
  let selected3 = document.querySelector('input[type=radio][name=question3]:checked');
  alert(`Usted seleccionó ${selected1.value} , ${selected2.value} y ${selected3.value}`);
}

const showCorrectAnswer = () => {
  document.getElementById('q1Choice2Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q2Choice4Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q3Choice3Txt').style.backgroundColor = '#9FC131';
}

const showResults = () => {
  const selected1 = document.querySelector('input[type=radio][name=question1]:checked');
  const selected2 = document.querySelector('input[type=radio][name=question2]:checked');
  const selected3 = document.querySelector('input[type=radio][name=question3]:checked');

  const correctAnswers = {
    question1: "Mercurio",
    question2: "Pacífico",
    question3: "Bogotá"
  };

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>Pregunta 1: Seleccionaste: ${selected1.value}, Respuesta correcta: ${correctAnswers.question1}</p>
    <p>Pregunta 2: Seleccionaste: ${selected2.value}, Respuesta correcta: ${correctAnswers.question2}</p>
    <p>Pregunta 3: Seleccionaste: ${selected3.value}, Respuesta correcta: ${correctAnswers.question3}</p>
  `;
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
verifyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  verify();
  showCorrectAnswer();
  showResults();
})
