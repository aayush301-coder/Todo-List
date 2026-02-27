let todoList = [{
    item: 'yoyo',
    dueDate: '27/02/2026'
}];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml =''; 

    for(let i=0;i<todoList.length;i++) {
        let {item, dueDate} = todoList[i];
        newHtml += `
            <div>
                <span>${item}</span>
                <span>${dueDate}</span>
                <button onclick="todoList.splice(${i},1);
                displayItems();">Delete</button>
            </div>
        `;
    }
    containerElement.innerHTML= newHtml; 
}