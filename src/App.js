import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import cusTheme from './cusTheme';


injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={ getMuiTheme(cusTheme) }>

          <div className="App">
            <AppBar
              title="React App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonClick={ () => this.setState({ open: !this.state.open }) }
            />

            <Drawer 
              docked={false}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>
              <NavLink exact to='/'>
                <MenuItem onClick={this.handleClose}>
                  Home
                </MenuItem>
              </NavLink>
              <NavLink to='/logos'>
                <MenuItem onClick={this.handleClose}>
                  Logos
                </MenuItem>
              </NavLink>
              <NavLink to='/letterhead'>
                <MenuItem onClick={this.handleClose}>
                  Letterhead
                </MenuItem>
              </NavLink>
              <NavLink to='/share-a-story'>
                <MenuItem onClick={this.handleClose}>
                  Share a Story
                </MenuItem>
              </NavLink>
              <NavLink to='/service-request-form'>
                <MenuItem onClick={this.handleClose}>
                  Service Request Form
                </MenuItem>
              </NavLink>
              <NavLink to='/tutorial'>
                <MenuItem onClick={this.handleClose}>
                  Tutorial
                </MenuItem>
                </NavLink>
            </Drawer>

            <Route exact path="/" render={ () => <h1>Home VIew</h1> } />
            <Route exact path="/logos" render={ () => <h1>Logos View</h1> } />
            <Route exact path="/letterhead" render={ () => <h1>Letterhead View</h1> } />
            <Route exact path="/share-a-story" render={ () => <h1>Share a Story View</h1> } />
            <Route exact path="/service-request-form" render={ () => <h1>Service Request form View</h1> } />
            <Route exact path="/tutorial" render={ () => <h1>Tutorial View</h1> } />
          </div>

        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
