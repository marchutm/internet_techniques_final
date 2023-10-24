
const icon = document.querySelector('.fa-comment');
const form = document.querySelector('.form');
const closeButton = document.querySelector('.close-button');
const emailInput = document.querySelector('.email-input');
const questionInput = document.querySelector('.question-input');
const sendButton = document.querySelector('.send-button');

icon.addEventListener('click', () => {
  form.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  form.style.display = 'none';
});

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const question = questionInput.value;

  if (!email.includes('@')) {
    alert('Proszę podać poprawny adres email');
  } else {
    alert(`Dziękujemy za pytanie!\nEmail: ${email}\nPytanie: ${question}`);
    emailInput.value = '';
    questionInput.value = '';
  }
});
