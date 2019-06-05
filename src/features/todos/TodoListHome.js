import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class TodoListHome extends React.Component {
  state = {
    tasks: [],
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:8001/api/todos').then(response => {
      this.setState({
        tasks: response.data
      })
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  render() {

      return (
        <div>
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
                                {this.state.tasks.map((task) => (
                                  <tr className="key={task.id}">
                                    <td>{ task.id }</td>
                                    <td>{ task.text } </td>
                                    <td>{ task.due }</td>
                                    <td>{ task.done }</td>
                                    <td><button className="button is-primary">Mark as Complete</button></td>
                                    <td><button className="button is-danger">Delete</button></td>
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
        </div>
      )
  }
}
export default TodoListHome;
