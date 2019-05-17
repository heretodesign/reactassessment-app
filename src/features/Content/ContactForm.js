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
        <section className="section is-paddingless-horizontal">
            <div className="container grid is-large">
                <div className="firstsection">
                    <h1 className="title is-3" id="mainBlack">SEE YOU AT THE WEDDING!</h1>
                    <div className="content">
                        <p className="subtitle is-5" id="fontcolor">We can’t wait to see all of our beloved
                         friends and relatives at the wedding. If, by chance, you cannot be there,
                          please let us know in advance.</p>
                          <a class="button is-large is-rounded is-fullwidth is-primary has-text-weight-bold">
                          <span class="icon is-small">
                            <i class="far fa-envelope"></i>
                          </span>
                          <span className="has-text-weight-bold">RSVP NOW</span>
                          </a>
                          <h1 className="title is-3" id="textPinkDark">GOOGLE MAPS <br /> AT THE Bottom</h1>
                    </div>
                 </div>
            </div>
        </section>
      </>
    );
  }

}

export default ContactForm;
