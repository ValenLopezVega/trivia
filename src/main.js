const validateName = () => {
  let nameLocalStorage = localStorage.getItem('playerName');
  if(nameLocalStorage !== null && nameLocalStorage.length > 0){
    document.getElementById('name').value = nameLocalStorage;
  }
}

const chooseTrivia = () => {
  let name = document.getElementById('name').value;
  localStorage.setItem('playerName', name);
  document.getElementById('welcomeMsg').textContent = `Hola ${name}, escoge un tema`;
  document.getElementById('questions').style.display = 'block';
  document.getElementById('intro').style.display = 'none';
}

const playGeneral = () => {
  document.getElementById('welcomeMsg').style.display = 'none';
  document.getElementById('questions').style.display = 'none';
  document.getElementById('general').style.display = 'block';
  document.getElementById('movies').style.display = 'none';
  document.getElementById('intro').style.display = 'none';
}

const playMovies = () => {
  document.getElementById('welcomeMsg').style.display = 'none';
  document.getElementById('questions').style.display = 'none';
  document.getElementById('general').style.display = 'none';
  document.getElementById('movies').style.display = 'block';
  document.getElementById('intro').style.display = 'none';
}

function verifyGeneral() {
  document.getElementById('verifyGeneralBtn').style.display = 'none';

  let selected1 = document.querySelector('input[type=radio][name=question1]:checked');
  let selected2 = document.querySelector('input[type=radio][name=question2]:checked');
  let selected3 = document.querySelector('input[type=radio][name=question3]:checked');

  let pointsGeneral = 0;

  if(selected1.value === 'mercurio'){
    pointsGeneral +=1;
  }else{
    document.getElementById(`${selected1.id}Txt`).style.backgroundColor = 'red';
  }

  if(selected2.value === 'pacifico'){
    pointsGeneral +=1;
  }else{
    document.getElementById(`${selected2.id}Txt`).style.backgroundColor = 'red';
  }

  if(selected3.value === 'bogota'){
    pointsGeneral +=1;
  }else{
    document.getElementById(`${selected3.id}Txt`).style.backgroundColor = 'red';
  }
  document.getElementById('resultsGeneral').textContent = `${localStorage.getItem('playerName')}, su puntaje es: ${pointsGeneral}`;
}

const showCorrectGeneral = () => {
  document.getElementById('q1Choice2Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q2Choice4Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q3Choice3Txt').style.backgroundColor = '#9FC131';
}

function verifyMovies() {
  document.getElementById('verifyMoviesBtn').style.display = 'none';

  let selected4 = document.querySelector('input[type=radio][name=question4]:checked');
  let selected5 = document.querySelector('input[type=radio][name=question5]:checked');
  let selected6 = document.querySelector('input[type=radio][name=question6]:checked');

  let pointsMovies = 0;

  if(selected4.value === 'kathryn-bigelow'){
    pointsMovies +=1;
  }else{
    document.getElementById(`${selected4.id}Txt`).style.backgroundColor = 'red';
  }

  if(selected5.value === '96'){
    pointsMovies +=1;
  }else{
    document.getElementById(`${selected5.id}Txt`).style.backgroundColor = 'red';
  }

  if(selected6.value === 'celine-dion'){
    pointsMovies +=1;
  }else{
    document.getElementById(`${selected6.id}Txt`).style.backgroundColor = 'red';
  }
  document.getElementById('resultsMovies').textContent = `${localStorage.getItem('playerName')}, su puntaje es: ${pointsMovies}`;
}

const showCorrectMovies = () => {
  document.getElementById('q4Choice1Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q5Choice2Txt').style.backgroundColor = '#9FC131';
  document.getElementById('q6Choice4Txt').style.backgroundColor = '#9FC131';
}

const restart = () => {
  document.getElementById('questions').style.display = 'none';
  document.getElementById('general').style.display = 'none';
  document.getElementById('movies').style.display = 'none';
  document.getElementById('intro').style.display = 'block';
}

const playBtn = document.getElementById('playGameBtn');
playBtn.addEventListener('click', () => {
  chooseTrivia();
})

const playGeneralBtn = document.getElementById('generalTriviaBtn');
playGeneralBtn.addEventListener('click', () => {
  playGeneral();
})

const playMoviesBtn = document.getElementById('moviesTriviaBtn');
playMoviesBtn.addEventListener('click', () => {
  playMovies();
})

const restartBtn = document.getElementById('restartGameBtn');
restartBtn.addEventListener('click', () => {
  restart();
})

const verifyGeneralBtn = document.getElementById('verifyGeneralBtn');
verifyGeneralBtn.addEventListener('click', (e) => {
  e.preventDefault();
  verifyGeneral();
  showCorrectGeneral();
})

const verifyMoviesBtn = document.getElementById('verifyMoviesBtn');
verifyMoviesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  verifyMovies();
  showCorrectMovies();
})

validateName();
