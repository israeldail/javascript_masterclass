const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const regex = /^[a-zA-Z]{6,}$/g;

console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    

    if (regex.test(username)) {
        feedback.textContent = 'username is valid'
    } else {
        feedback.textContent = 'username must contain letters only and be at least 6 characters long.'
    }

});

// live feedback

form.username.addEventListener('keyup', e => {
    if (!regex.test(e.target.value)) {
        username.style.backgroundColor = 'rgba(255,0,0,0.2)'
    } else {
        username.style.backgroundColor = 'rgba(0,255,0,0.2)'
    }
});