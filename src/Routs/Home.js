import React, { Component, useState, useEffect, useContext } from 'react';
import TodoList from '../Components/TodoList';
import FormAddTodo from '../Components/Todo/FormAddTodo';
import TodoContext from '../Components/Contex/Todos';
import todoApi from '../Components/Api/todos'

const Home = () => {


    const [loading, setLoading] = useState()
    const todosContext = useContext(TodoContext);

    useEffect(() => {
        setLoading(true);
        todoApi.get(`/todos.json`)
            .then(response => jsonHandler(response.data))
            .catch(err => console.log(err));
    }, [])
    let jsonHandler = (data) => {
        setLoading(false);
        let todos = Object
            .entries(data)
            .map(([key, value]) => {
                return {
                    ...value,
                    key
                }
            });

        todosContext.dispatch({ type: 'init-todo', payload: { todos } })
    }

    return (
        <>
            <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                    <FormAddTodo />
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        {
                            loading
                                ? <h2>Loading data ...</h2>
                                : (
                                    <TodoList />
                                )
                        }
                    </div>
                </div>
            </div></>
    );
}

export default Home;