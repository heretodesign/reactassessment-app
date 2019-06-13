import React, { Component } from 'react'
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


function Landing() {

  return (
    <>
      <section className="section is-paddingless-horizontal imgLanding">
          <div className="container grid is-large">
              <div className="firstsection">
                  <h2 className="title is-3 has-text-left has-text-weight-light" id="mainBlack">UMAI Solves The Problems<br />
                      Modern Restaurants Deal With.
                  </h2>
                  <div className="content">
                      <p className="subtitle is-6 has-text-left has-text-grey has-text-weight-semibold is-uppercase">increase reservations  automate expensive tasks  decrease no-shows</p>
                  </div>
                  <div className="content" id="landingForm">
                    <div className="columns">
                      <div className="column is-one-third">
                        <div className="field">
                          <div className="control">
                            <input className="input is-large" type="text" placeholder="Email Address" />
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <a className="button is-large is-primary is-fullwidth">GET DEMO</a>
                      </div>
                      <div className="column"></div>
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

export default Landing;
