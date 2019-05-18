import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


function AddTask() {

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
                  <div className="content" id="landingForm">
                    <div class="columns">
                      <div class="column is-half">
                        <div class="field">
                          <div class="control">
                            <input class="input is-large" type="text" placeholder="Add tasks to your todo list" />
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-third">
                        <div class="field">
                          <div class="control">
                            <a class="button is-large is-primary is-fullwidth">Add task</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content" id="landingForm">
                    <div class="columns">
                      <div class="column is-half">
                        <div class="field">
                          <div class="control">
                            <input class="input is-large" type="text" placeholder="Add tasks to your todo list" />
                          </div>
                        </div>
                      </div>
                      <div class="column is-one-third">
                        <div class="field">
                          <div class="control">
                            <a class="button is-large is-primary is-fullwidth">Add task</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
          </div>
      </section>
    </>
  );
}

export default AddTask;
