import React, {useContext} from 'react';
import AuthContext from '../Contex/auth';
import TodosContext from '../Contex/Todos';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {
    const todosContext = useContext(TodosContext);
    const authContext = useContext(AuthContext);
    let doLogin = () =>authContext.dispatch({ type : 'login-user'});
    let doLogout = () =>authContext.dispatch({ type : 'logout-user'});
    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm navbar-expand-md">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>
                    <ul className='navbar-nav mr-auto '>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/' exact activeStyle={{
                                color : 'blue'
                            }}>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about'exact activeStyle={{
                                color : 'yellow'
                            }}>About</NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink className='nav-link' to='/contact'exact activeStyle={{
                                color : 'green'
                            }}>Contact</NavLink>
                        </li>
                    </ul>
                    {
                        !authContext.authenticated 
                        ?<button className='btn btn-sm btn-success' onClick={doLogin}>Login</button>
                        :<button className='btn btn-sm btn-danger' onClick={doLogout}>Logout</button>
                        
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;