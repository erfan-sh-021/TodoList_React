import EditTodo from "../Todo/EditeTodo";

function Appreducer(state, action) {
    switch (action.type) {
        case 'init-todo':
            let{todos} = action.payload;
            return {
                ...state,
                todos,
            }
        case 'add_todo':
            return addTodo(state, action)
            break;
        case 'delete_todo':
            return deleteTodo(state, action)
            break;
        case 'toggle-todo':
            return toggleTodo(state, action)
            break;
        case 'edit-todo' :
            return EditTodo(state,action);
            break;  
        case 'login-user':
            return {
                ...state,
                authenticated: true
            }
            break;
        case 'log-out':
            return {
                ...state,
                authenticated: false
            }
            break;
        default:
            return state;
            break;
    }
}
let addTodo = (state, action) => {
    let { todo } = action.payload;
    console.log(todo)
    return {
        ...state,
        todos: [
            ...state.todos,
            todo
        ]
    }
}
let deleteTodo = (state, action) => {
    let { key } = action.payload;
    return {
        ...state,
        todos: state.todos.filter(item => item.key !== key)
    }
}
let toggleTodo = (state, action) => {
    let { key } = action.payload;
    let item = state.todos.find(item => item.key === key);
    item.done = !item.done;
    let newTodos = state.todos.filter(item => item.key !== key)
    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }
}
let editTodo =(state,action) => {
    let {key,text} = action.payload
    let { todos } = this.state;
    let item = todos.find(item => item.key === key);
    item.text = text;
    let newTodos = todos.filter(item => item.key !== key)

    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }
}
export default Appreducer;

// addToDo(text) {
//     this.setState(prevState => {
//         return {
//             todos: [
//                 ...prevState.todos,
//                 { key: Date.now(), done: false, text }

//             ]
//         }
//     })
// }
// editTodo(key, text) {
//     let { todos } = this.state;
//     let item = todos.find(item => item.key === key);
//     item.text = text;
//     let newTodos = todos.filter(item => item.key !== key)
//     this.setState({
//         todos: [
//             ...newTodos,
//             item
//         ]
//     })
// }
// deleteTodo(key) {
//     this.setState(prevState => {
//         return {
//             todos: prevState.todos.filter(item => item.key !== key)
//         }
//     }
//     )
// }
// toggleTodo(key) {
//     let { todos } = this.state;
//     let item = todos.find(item => item.key === key);
//     item.done = !item.done;
//     let newTodos = todos.filter(item => item.key !== key)
//     this.setState({
//         todos: [
//             ...newTodos,
//             item
//         ]
//     })
// }