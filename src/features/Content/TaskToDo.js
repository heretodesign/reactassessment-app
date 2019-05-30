import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import axios from 'axios'
import { Route, Link } from "react-router-dom"


axios.defaults.baseURL = 'http://127.0.0.1:8001/api'

function TaskToDo()  {
  


  const markCompleted = event => {
    axios.get('/todos')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }


  const handleSubmit = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  const handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <section className="section is-paddingless-horizontal">
          <div className="container grid is-large">
              <div className="firstsection">
                  <h2 className="title is-3 has-text-left has-text-weight-light" id="mainBlack">React ToDo Assessment<br />
                  </h2>
                  <div className="content">
                      <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">dashboard: manage All Your life changing Tasks. With poise and ease - execute all of them one by one</p>
                  </div>
                  <div className="content">
                    <div class="columns">
                      <div class="column is-one-quarter">
                        <div class="field">
                          <div class="control">
                            <a class="button is-large is-primary is-fullwidth">Home</a>
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-quarter">
                        <div class="field">
                          <div class="control">
                            <a class="button is-large is-primary is-fullwidth">Completed</a>
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-quarter">
                        <div class="field">
                          <div class="control">
                            <a class="button is-large is-primary is-fullwidth">Trash</a>
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-quarter">
                        <div class="field">
                          <div class="control">
                            <a class="button is-large is-primary is-fullwidth">Add</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content" id="landingForm">
                    <div class="columns">
                    <form id="joinus-form" onSubmit={this.handleSubmit}>
                        <div class="column is-two-fifths">
                          <div class="field">
                            <div class="control">
                              <input class="input is-large" type="text" placeholder="Add tasks" value={this.state.text} onChange={this.handleChange} />
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-fifth">
                          <div class="field">
                            <div class="control">
                              <input class="input is-large" type="text" placeholder="Due Date" value={this.state.due} onChange={this.handleChange} />
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-fifth">
                          <div class="field">
                            <div class="control">
                              <input class="input is-large" type="text" placeholder="Date Completed" value={this.state.completed} onChange={this.handleChange} />
                            </div>
                          </div>
                        </div>
                        <div class="column is-one-fifth">
                          <div class="field">
                            <div class="control">
                              <button class="button is-large is-primary is-fullwidth" type="submit" value="Submit">Add task</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="content">
                      <p className="subtitle is-6 has-text-center has-text-grey has-text-weight-semibold is-uppercase">working with hundreds of restaurants </p>
                  </div>
               </div>
          </div>
      </section>
    </>
  );
}

export default TaskToDo;
