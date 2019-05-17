import React, { Component } from 'react';
import { Columns } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import umaifcbk from '../../img../../img/fcbk.svg';
import umaiinsta from '../../img../../img/insta.svg';
import umailinked from '../../img../../img/linked.svg';

function BottomFooter() {

  return (
      <footer class="section footer-btm">
          <div class="container content has-text-centered">
              <div class="columns">
                <div class="column is-2">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark">UMAI</h1>
                      <div className="content">
                        <p className="subtitle is-5 has-text-grey">
                          <div className="has-text-left has-text-weight-light">
                              <div className="has-text-left">About Us</div>
                              <div className="has-text-left">Careers</div>
                          </div>
                        </p>
                      </div>
                  </div>
                </div>
                <div class="column is-3">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark">UMAI Singapore</h1>
                        <div className="content">
                            <p className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <div className="has-text-left">info@letsumai.com</div>
                                    <div className="has-text-left">
                                      #04-01 The Quadrant<br />
                                      19 Cecil Street<br />
                                      Singapore 049704
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div className="firstFooter">
                        <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark">UMAI Malaysia</h1>
                        <div className="content">
                            <p className="subtitle is-5 has-text-white">
                                <div className="has-text-left has-text-weight-light has-text-grey">
                                    <div className="has-text-left">info@letsumai.com</div>
                                    <div className="has-text-left">
                                      A-21-06 Mercu Summer Suites,<br />
                                      8 Jalan Cendana <br />
                                      Kuala Lumpur 50250
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-3">
                  <div className="firstFooter">
                      <h1 className="title is-4 has-text-weight-bold has-text-white has-text-left has-text-grey-dark">
                      <div class="navbar-end">
                        <div class="navbar-item">
                          <div class="buttons">
                            <a class=" is-primary">
                              <img src={umaifcbk} className="nav-logo has-text-right" width="60" height="60" alt="umai" />
                            </a>
                            <a class=" is-primary">
                              <img src={umailinked} className="nav-logo" width="60" height="60" alt="umai"  />
                            </a>
                            <a class="is-light">
                              <img src={umaiinsta} className="nav-logo" width="60" height="60" alt="umai"  />
                            </a>
                          </div>
                        </div>
                      </div>
                      </h1>
                   </div>
                </div>
              </div>
          </div>
          <section className="section">
              <div className="container">
                  <div className="content">
                    <hr className="hr-footer" />
                  </div>
              </div>
          </section>
          <section className="section">
              <div className="container">
                <div class="columns">
                  <div class="column is-half">
                    <div className="content">
                        <p className="subtitle is-5 has-text-white">
                            <div className="has-text-left has-text-weight-light has-text-grey">
                                <a href="https://www.letsumai.com/terms-and-conditions" className="has-text-left has-text-grey">Terms & Conditions | Privacy Policy</a>
                            </div>
                        </p>
                    </div>
                  </div>
                  <div class="column">
                    <div className="content">
                        <p className="subtitle is-5 has-text-white">
                            <div className="has-text-right has-text-weight-light has-text-grey">
                                <a href="#" className="has-text-right has-text-grey">© 2018 UMAI. All Rights Reserved</a>
                            </div>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
          </section>
      </footer>
  );
}

export default BottomFooter;
