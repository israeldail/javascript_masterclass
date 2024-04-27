const btn = document.getElementById('popupBtn');
const wrapper = document.getElementById('wrapper');
const closeBtn = document.getElementById('close');

btn.addEventListener('click', () => {
    wrapper.classList.add('open')
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('open')
});

wrapper.addEventListener('click', () => {
    wrapper.classList.remove('open')
});