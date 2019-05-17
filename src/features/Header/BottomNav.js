import React, { Component } from 'react';
import umai from '../../img../../img/umai.svg';

import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


function BottomNav() {

  return (
      <div class="container topNav">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://www.letsumai.com/for-restaurants">
                  <img src={umai} className="nav-logo" width="200" height="150" alt="umai" />
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end has-text-weight-bold">

            </div>

            <div class="navbar-end">
              <div class="navbar-item has-text-weight-bold">
                <div class="buttons">
                  <a class="button is-primary">
                    <strong>GET STARTED</strong>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </nav>
      </div>
  );
}

export default BottomNav;
