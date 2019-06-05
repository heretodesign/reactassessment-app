import React from 'react'
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const TodoShow = props => {

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
                              { this.props.tasks.map((task) => (
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
        <section className="is-paddingless-horizontal has-background-primary">
            <div className="container">
                <div className="content">
                    <p className="subtitle is-6 has-text-white isdata">Show Todo // Update Marked as Complete</p>
                 </div>
            </div>
        </section>
    </>
  );
}

export default TodoShow;
