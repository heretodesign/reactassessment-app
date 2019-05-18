import React, { Component } from 'react';
import Landing from './Landing.js';
import ContactForm from './ContactForm.js';
import Task from './TaskToDo.js';


class Body extends React.Component {

  render() {
    return (
      <div className="body">
          <Landing />
          <Task />
          <ContactForm />
      </div>
    );
  }
}

export default Body;
