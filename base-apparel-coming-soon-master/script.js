const form = document.querySelector('#email__form');
const errorMessage = document.querySelector('.text-error');
const input = document.querySelector('.input');

validEmail = email => {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expression.test(email);
}

window.addEventListener('load', () => {
    const emailIncorrect = localStorage.getItem('emailIncorrect');
    
    if (emailIncorrect) {
        input.classList.add('error');
        errorMessage.classList.add('visible');
    } else {
        input.classList.remove('error');
        errorMessage.classList.remove('visible');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const mail = input.value.trim();

    if (!validEmail(mail)) {
        input.classList.add('error');
        errorMessage.classList.add('visible');

        localStorage.setItem('emailIncorrect', 'true');
    } else {
        localStorage.removeItem('emailIncorrect'); 
        form.submit();
    }
});
