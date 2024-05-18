    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => json.map(todoItems))

    const todoList = document.getElementById("todo-list");

    function todoItems (task) {
        const mytask = `
            <li class="single-task">
            <button>✅</button>${task.title}.<button>⛔</button>
            </li>
        `;
        todoList.innerHTML += mytask;
        return mytask;
    };