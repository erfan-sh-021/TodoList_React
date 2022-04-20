import React, { Component } from 'react';

const todosContext = React.createContext({
    todos: [],
    add: () => { },
    edit: () => { },
    delete: () => { },
    done: () => { },

})

export default todosContext;