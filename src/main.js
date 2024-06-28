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

  if(selected1.value === 'mercurio'){

  }else{
    document.getElementById(`${selected1.id}Txt`).style.backgroundColor = 'red';
  }

  if(selected2.value === 'pacifico'){

  }else{
    document.getElementById(`${selected2.id}Txt`).style.backgroundColor = 'red';
  }

  if(selected3.value === 'bogota'){

  }else{
    document.getElementById(`${selected3.id}Txt`).style.backgroundColor = 'red';
  }
}

const showCorrectAnswer = () => {
  document.getElementById('q1Choice2Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q2Choice4Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q3Choice3Txt').style.backgroundColor = '#9FC131';
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
})
