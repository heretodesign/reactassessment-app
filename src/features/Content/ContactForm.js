import React, { Component } from 'react';
import { Form, Message, Container, Row, Input, Label, Col, Button } from "react-bulma-components/full"

class ContactForm extends React.Component {
  state = {
    textInput: "",
    username: "goalKeeper"
  }

  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  sendMessage = event => {
  console.log(this.state.textInput)
  }


  render() {
    return (
      <>
        <section className="section is-paddingless-horizontal imgContact">
            <div className="container grid is-large">
              <div class="columns is-mobile">
                <div class="column is-half is-offset-one-quarter">
                <div className="firstsection">
                    <p className="subtitle is-4 has-text-center has-text-grey has-text-weight-semibold">Get started today</p>
                    <p className="subtitle is-5 has-text-center has-text-grey has-text-weight-semibold">Enhance Your Hospitality</p>
                    <div className="content">
                      <div class="columns">
                        <div class="column is-half">
                          <div class="field">
                            <div class="control">
                              <input class="input is-large is-primary is-outlined" type="text" placeholder="Your Name" />
                            </div>
                          </div>
                        </div>
                        <div class="column">
                        <div class="field">
                          <div class="control">
                            <input class="input is-large is-primary is-outlined" type="text" placeholder="Your Number" />
                          </div>
                        </div>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column">
                          <div class="field">
                            <div class="control">
                              <input class="input is-large is-primary is-outlined" type="text" placeholder="Your Email" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column">
                          <div class="field">
                            <div class="control">
                              <input class="input is-primary is-outlined is-large" type="text" placeholder="Your Restaurant" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="columns">
                        <div class="column">
                          <div class="field">
                            <div class="control">
                              <a class="button is-large is-primary is-fullwidth">GET DEMO</a>
                            </div>
                          </div>
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

}

export default ContactForm;
