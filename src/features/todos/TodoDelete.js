import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


class TodoDelete extends React.Component {
  state = {
    tasks: [],
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:8001/api/todos/trash').then(response => {
      console.log(response)
      this.setState({
        tasks: response.data
      })
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  markComplete = (taskId) => {
    axios.put(`http://127.0.0.1:8001/api/todos/${taskId}/complete`)
    .then(response => {
      this.setState({
        tasks: this.state.tasks.filter(task => task.id != taskId)
      })
    })
    .catch(error => {
      alert('Cannot Mark it as Complete!')
    })
  }

  restoreTrash = (taskId) => {
    axios.put(`http://127.0.0.1:8001/api/todos/${taskId}/restore`)
    .then(response => {
      this.setState({
        tasks: this.state.tasks.filter(task => task.id != taskId)
      })
    })
    .catch(error => {
      alert('Cannnot Restore Task')
    })
  }

  render() {

    return (
      <>
      <section className="section is-paddingless-horizontal">
          <div className="container grid is-large notification">
              <div className="firstsection">
                  <h1 className="title is-3 has-text-danger">List of All Your Tasks</h1>
                  <div className="content">
                    <div className="columns">
                      <div className="column" id="tablelisttask">
                        <table className="table is-mobile">
                          <thead>
                            <tr>
                              <th><abbr title="id" className="is-3">Id</abbr></th>
                              <th><abbr title="task">Task</abbr></th>
                              <th><abbr title="due">Due Date</abbr></th>
                              <th><abbr title="done">Date completed</abbr></th>
                              <th><abbr title="completed">Completed</abbr></th>
                              <th><abbr title="action">Action</abbr></th>
                            </tr>
                          </thead>
                          <tbody>
                            { this.state.tasks.map((task) => (
                              <tr className="key={task.id}">
                                <td>{ task.id }</td>
                                <td>{ task.text } </td>
                                <td>{ task.due }</td>
                                <td>{ task.done }</td>
                                <td><button  onClick={() => {this.markComplete(task.id)} } className="button is-primary">Mark as Complete</button></td>
                                <td><button  onClick={() => {this.restoreTrash(task.id)} } className="button is-danger">Restore Trash</button></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                       </div>
                    </div>
                  </div>
               </div>
          </div>
      </section>
          <section className="is-paddingless-horizontal has-background-primary">
              <div className="container grid">
                  <div className="firstsection">
                      <p className="subtitle is-6 has-text-white isdata">todo delete</p>
                   </div>
              </div>
          </section>
      </>
    )
  }
}
export default TodoDelete;
