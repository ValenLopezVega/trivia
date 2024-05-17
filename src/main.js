function greet() {
  let selected1 = document.querySelector('input[type=radio][name=question1]:checked');

  let selected2 = document.querySelector('input[type=radio][name=question2]:checked');
  alert('Usted seleccionó ' + selected1.value + ' y ' + selected2.value);
}


