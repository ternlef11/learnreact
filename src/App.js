import React, { Component } from "react"
import "./App.css"
import "stylemuj.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <body>
    <div id='landingbg'>
      <div id="demo">
        <div class='eggcont'>
          <div class='navicircle' type="button" onclick="loadAbout()"></div>
        </div>
        <h1 type="button" onclick="loadCircles()">Circles</h1>
      </div>
    </div>
    <script src="landbutton.js"></script>
    <script src="circlesbutton.js"></script>
    <script src="aboutbutton.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.pr oduction.min.js"></script>
  </body>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
