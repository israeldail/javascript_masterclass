const list = document.getElementById('list');
const btn = document.getElementById('btn');
const taskInput = document.getElementById('task');

btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = taskInput.value;
    list.prepend(li);
    taskInput.value = "";

    li.addEventListener('dblclick', () => {
        list.removeChild(li);
    });
});