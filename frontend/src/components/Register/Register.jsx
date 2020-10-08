import React, { Component } from 'react';
import MainNav from '../MainNav';

class Register extends Component {

    render() {
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav />
                <div className="container-fluid page-container">
                    <div className="row">
                        <div className="col s12">
                            <h1 className="page-title"> Register </h1>
                        </div>
                    </div>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <label className="input-label" for="first_name">
                                        First Name
                                        <i class="material-icons input-valid ">check_circle</i>
                                    </label>
                                    <input id="first_name" type="text" class="validate" />
                                </div>
                                <div class="input-field col s6">
                                    <label className="input-label" for="last_name">
                                        Last Name
                                    <i class="material-icons input-valid ">check_circle</i>
                                    </label>
                                    <input id="last_name" type="text" class="validate col s12" />

                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <label className="input-label" for="password">
                                        Username
                                        <i class="material-icons input-valid ">check_circle</i>
                                    </label>
                                    <input id="password" type="text" class="validate" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <label className="input-label" for="password">
                                        Password
                                        <i class="material-icons input-valid ">check_circle</i>
                                    </label>
                                    <input id="password" type="password" class="validate" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <label className="input-label" for="confirm_password">
                                        Confirm Password
                                        <i class="material-icons input-valid ">check_circle</i>
                                    </label>
                                    <input id="password" type="password" class="validate" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <label className="input-label" for="email">
                                        Email
                                        <i class="material-icons input-valid ">check_circle</i>
                                    </label>
                                    <input id="email" type="email" class="validate" />
                                </div>
                            </div>

                            <a class="grey-btn btn right"><i class="material-icons right">chevron_right</i>NEXT</a>

                        </form>
                    </div>
                </div>


            </div>
        );
    }
}

export { Register };