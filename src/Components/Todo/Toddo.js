import React, { useContext, useState } from 'react';
import EditTodo from './EditeTodo';
import TodosContext from '../Contex/Todos';
import todoApi from '../Api/todos'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Todo = (props) => {
    let { item } = props;
    const [edit, setEdit] = useState(false);
    const todosContext = useContext(TodosContext)
    let editHandler = text => {
        todoApi.put(`/${item.key}.json`, { done: item.done, text })
            .then(response => {
                todosContext.dispatch({ type: 'edit-todo', payload: { key: item.key, text } })
            })
            .catch(err => {
                console.log(err);
            })
        setEdit(false);
    }
    let donHandler = e => {
        todoApi.put(`/${item.key}.json`, { done: !item.done, text: item.text })
            .then(response => {
                todosContext.dispatch({ type: 'toggle-todo', payload: { key: item.key } })
            })
            .catch(err => {
                console.log(err);
            })
    }
    let deleteHandler = e => {
        todoApi.delete(`/${item.key}.json`)
            .then(response => {
                todosContext.dispatch({ type: 'delete_todo', payload: { key: item.key } })
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <>
            {
                !edit
                    ? (
                        <div className="col-6 mb-2">
                            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    <Link to={`/${item.key}`}>{item.text}</Link>
                                </div>
                                <div>
                                    <button type="button" className={`btn  btn-sm ${!item.done ? 'btn-success' : 'btn-warning'}`}
                                        onClick={donHandler}>{item.done ? 'undone' : 'done'}</button>
                                    <button type="button" className="btn btn-info btn-sm"
                                        onClick={() => setEdit(true)}>edit</button>
                                    <button type="button" className="btn btn-danger btn-sm ml-1" onClick={deleteHandler}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                    : <EditTodo text={item.text} edit={editHandler} />

            }
        </>

    );
}

export default Todo;