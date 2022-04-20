import React, { useState, useContext } from 'react';
import Todo from './Todo/Toddo'
import TodosContext from './Contex/Todos';

const TodoList = (props) => {
    const [StatuseDone, setDone] = useState(false);
    const todosContext = useContext(TodosContext);

    let { todos } = todosContext;
    let filtertodos = todos.filter(item => item.done === StatuseDone);
    return (
        <>
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link font-weight-bold ${!StatuseDone ? 'active' : ''}`} id="nav-home-tab" onClick={() => setDone(false)}>undone <span className="badge bg-secondary">{todos.filter(item => item.done === false).length}</span></a>
                    <a className={`nav-item nav-link font-weight-bold ${StatuseDone ? 'active' : ''}`} id="nav-profile-tab" onClick={() => setDone(true)}>done <span className="badge bg-success">{todos.filter(item => item.done === true).length}</span></a>
                </div>
            </nav>
            {
                filtertodos.length === 0
                    ? <p>there isn`t any Todos</p>
                    : filtertodos.filter(item => item.done === StatuseDone).map(item => <Todo key={item.key} item={item}
                        delete={props.delete}
                        done={props.done}
                        edit={props.edit} />)
            }
        </>
    );
}


export default TodoList;