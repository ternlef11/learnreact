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
