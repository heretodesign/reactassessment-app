import React, { Component } from 'react';
import TopFooter from './TopFooter.js'
import BottomFooter from './BottomFooter.js'


class Footer extends React.Component {

  render() {
    return (
      <div className="footerMain">
          <TopFooter />
          <BottomFooter />
      </div>
    );
  }
}

export default Footer;
