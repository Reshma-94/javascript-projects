const form = document.getElementById('form-container');
const taskList = document.querySelector('.task-list');
const inputEl = document.getElementById('input-task');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = inputEl.value;

  const taskEl = document.createElement('div');
  taskEl.classList.add('task');
  const taskNameEl = document.createElement('button');
  taskNameEl.classList.add('task-name');
  taskNameEl.textContent = inputValue;
  const removeEl = document.createElement('button');
  removeEl.classList.add('removeBtn');
  removeEl.textContent = 'Remove';

  taskEl.appendChild(taskNameEl);
  taskEl.appendChild(removeEl);
  taskList.appendChild(taskEl);

  taskNameEl.addEventListener('click', () =>
    taskNameEl.classList.toggle('active')
  );
  removeEl.addEventListener('click', () => taskEl.remove());

  inputEl.value = '';
});
