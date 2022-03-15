document.addEventListener('click', function(e) {
    //Delete feature
    if (e.target.classList.contains('delete-me')) {
        if (confirm("Are you sure you want to delete this task?")) {
            axios.post('/todos/deleteTodo', {id: e.target.getAttribute('data-id')}).then(function() {
                e.target.parentElement.parentElement.remove()
            }).catch(function() {
                console.log("Please try again later")
            })
        }
    }

    //Update Feature
    if (e.target.classList.contains('edit-me')) {
        let userInput = prompt('Edit your todo task', e.target.parentElement.parentElement.querySelector('.todo-text').innerHTML)
        if (userInput) {
            axios.post('/todos/updateTodo', {todo: userInput, id: e.target.getAttribute('data-id')}).then(function() {
            e.target.parentElement.parentElement.querySelector('.todo-text').innerHTML = userInput;
        }).catch(function() {
            console.log("Please try again later")
            })
        }
    }
})