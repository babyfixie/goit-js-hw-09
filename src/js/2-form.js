const form = document.querySelector('form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

input.placeholder = '';
textArea.placeholder = '';

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', () => {
  formData.email = input.value;
  formData.message = textArea.value;

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    console.log(error);
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  console.log(formData);
  input.value = '';
  textArea.value = '';
  formData.email = '';
  formData.message = '';
  localStorage.clear();
});

const getValue = () => {
  try {
    const formLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formLS && formLS.email && formLS.message) {
      input.value = formLS.email;
      textArea.value = formLS.message;
      formData.email = formLS.email;
      formData.message = formLS.message;
    }
  } catch (error) {
    console.log(error);
  }
};

getValue();
