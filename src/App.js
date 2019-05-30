import React from 'react'
import './App.scss'
import axios from 'axios'
import { Route, Link } from "react-router-dom"
import Header from './features/Header/Header.js'
import Footer from './features/Footer/Footer.js'
import Body from './features/Content/Main.js'

import TodoCreate from './features/todos/TodoCreate.js'
import TodoDelete from './features/todos/TodoDelete.js'
import TodoShow from './features/todos/TodoShow.js'
import TodoListHome from './features/todos/TodoListHome.js'
import TodoEdit from './features/todos/TodoEdit.js'
import TodoNav from './features/todos/TodoNav.js'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TodoNav />
        <Route exact path="/" component={TodoListHome} />
        <Route path="/todos/new" component={TodoCreate} />
        <Route path="/todos/delete" component={TodoDelete} />
        <Route path="/todos/show" component={TodoShow} />
        <Route path="/todos/edit" component={TodoEdit} />
      </div>
    );
  }
}

export default App;
