import React from 'react'
import { Link } from "react-router-dom"
import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const TodoNav = () => {
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
                  <div className="columns">
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/" className="button is-large is-primary is-fullwidth">Home</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/todos/show" className="button is-large is-primary is-fullwidth">Completed</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/todos/deleted" className="button is-large is-primary is-fullwidth">Trash</Link>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <Link to="/todos/new" className="button is-large is-primary is-fullwidth">Add</Link>
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
export default TodoNav;
