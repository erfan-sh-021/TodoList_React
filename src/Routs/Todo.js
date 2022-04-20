import React, { useEffect, useState } from 'react';
import { useParams , useHistory} from 'react-router-dom';
import todoApi from '../Components/Api/todos'

const Todo = (props) => {
    const params = useParams();
    const [todo, setTodo] = useState({})
    const [loading, setLoading] = useState();
    const history = useHistory();
    useEffect(() => {
        setLoading(true);
        todoApi.get(`/todos/${params.todo}.json`)
            .then(response => {
                setLoading(false)
                if (response.data) {
                    setTodo({ ...response.data, key: params.todo })
                }else{
                    history.push('/404')
                }
                setTodo({ ...response.data, key: params.todo })
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    {
                        loading
                            ? <h2>loading data ... </h2>
                            : (
                                <>
                                    <h2>todo detais</h2>
                                    <p>{todo.text}</p>
                                    <span className={`badge ${!todo.done ? 'bg-success' : 'bg-warning'}`}>{!todo.done ? 'done' : 'undone'}</span>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default Todo;