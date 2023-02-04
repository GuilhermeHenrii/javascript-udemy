const inputTxt = document.querySelector('.input-new-task');
const btn = document.querySelector('.btn-add-tarefa');
const list = document.querySelector('.tasks');

function createLi(){
    const li = document.createElement('li');
    return li;
};

inputTxt.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTxt.value) return;
        createTask();
    };
});

function cleanInput(){
    inputTxt.value = '';
    inputTxt.focus();
};

function createButtonDelete(li){
    li.innerText += ' ';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Apagar';
    li.appendChild(buttonDelete);
    buttonDelete.setAttribute('class', 'delete');
    buttonDelete.setAttribute('title', 'Apagar esta tarefa');
};

function createTask(inputText){
    const li = createLi();
    li.innerText = inputTxt.value;
    list.appendChild(li);
    cleanInput();
    createButtonDelete(li);
    saveTask();
};

btn.addEventListener('click', function(e){
    if(!inputTxt.value) return;
    createTask(inputTxt.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('delete')){
        el.parentElement.remove();
        saveTask();
    }
});

function saveTask(){
    const taskLi = list.querySelectorAll('li');
    const listOfTask = [];

    for(let task of taskLi){
        let txtTask = task.innerText;
        txtTask = txtTask.replace('Apagar', '').trim();//para tirar o botao apagar que veio junto
        listOfTask.push(txtTask);
    }

    const tasksJSON = JSON.stringify(listOfTask);
    localStorage.setItem('tasks', tasksJSON);
};

function addSaveTask(){
    const tasks = localStorage.getItem('tasks');
    const listOfTask = JSON.parse(tasks);

    for(let task of listOfTask){
        createTask(task);
    };
};

addSaveTask();