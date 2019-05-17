import React, { Component } from 'react';
import Landing from './Landing.js';
import ContactForm from './ContactForm.js';

class Body extends React.Component {

  render() {
    return (
      <div className="body">
          <Landing />
          <ContactForm />
      </div>
    );
  }
}

export default Body;
