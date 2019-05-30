import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


class TaskToDo extends React.Component  {
  state = {
    text: "",
    due: "",
    completed: "",
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
                      <div class="column is-two-fifths">
                        <div class="field">
                          <div class="control">
                            <input class="input is-large" type="text" placeholder="Add tasks" />
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="field">
                          <div class="control">
                            <input class="input is-large" type="text" placeholder="Due Date" />
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="field">
                          <div class="control">
                            <input class="input is-large" type="text" placeholder="Date Completed" />
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="field">
                          <div class="control">
                            <a class="button is-large is-primary is-fullwidth">Add task</a>
                          </div>
                        </div>
                      </div>
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
