import React, { useEffect, useReducer, useState } from 'react';
import { Route, BrowserRouter as Router , Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import AuthContext from './Contex/auth';
import todosContext from './Contex/Todos';
import loadable from '@loadable/component';
// video 77
// Import Components
import Header from './Layout/Header';
// import Home from '../Routs/Home';
import AsyncComponent from '../Routs/AsyncComponent';

import AppReducer from './Reducers/appReducer';
import { BrowserRouter } from 'react-router-dom';
// import About from '../Routs/About';
// import Contact from '../Routs/Contact';
// import Todo from '../Routs/Todo'
// import Notfound from '../Routs/Notfound';
const Home = loadable(() => import('../Routs/Home'))
const About = loadable(() => import('../Routs/About'))
const Contact = loadable(() => import('../Routs/Contact'))
const Todo = loadable(() => import('../Routs/Todo'))
const Notfound = loadable(() => import('../Routs/Notfound'))

// const Home = AsyncComponent( () => import('../Routs/Home').then(module =>module.default) )
// const About = AsyncComponent( () => import('../Routs/About').then(module =>module.default) )
// const Contact = AsyncComponent( () => import('../Routs/Contact').then(module =>module.default) )
// const Todo = AsyncComponent( () => import('../Routs/Todo').then(module =>module.default) )
// const Notfound = AsyncComponent( () => import('../Routs/Notfound').then(module =>module.default) )


function App() {
    const [state, dispatch] = useReducer(AppReducer, {
        todos: [],
        authenticated: false
    })
    return (
        <BrowserRouter>
            <AuthContext.Provider value={{
                authenticated: state.authenticated,
                dispatch
            }}>
                <todosContext.Provider value={{
                    todos: state.todos,
                    dispatch

                }}>
                    <div className="App">
                        <Header />
                        <main>
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='Todo/:todo' component={Todo} />
                                {/* <Route path='/courses/:id/create' component={Todo}/> */}
                                <Route path='/about' component={About} />
                                <Route path='/contact' component={Contact} />
                                <Route path='/404 ' component={Notfound} />
                                <Route path='' component={Notfound} />
                            </Switch>
                        </main>
                    </div>
                </todosContext.Provider>
            </AuthContext.Provider>

        </BrowserRouter>
    )
}


export default App;
