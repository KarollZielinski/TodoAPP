const form = document.getElementById("form");
const input = document.getElementById('input');
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const todoText = input.value;

    if(todoText){
        const todoEL = document.createElement
        ('li');
        todoEL.innerHTML = todoText;

        todoEL.addEventListener('click', ()=> {
            todoEL.classList.toggle('completed');
        });

        todoEL.addEventListener('contextmenu',
        (e)=>{
            e.preventDefault();

            todoEL.remove();
        })

        todos.appendChild(todoEL);

        input.value = "";
    }
});

