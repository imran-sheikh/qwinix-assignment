import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Api from './apis/api';

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       pinsCollected: false
     }
     this.showPins = '';
   }
  componentDidMount() {
     Api
     .get("/pins")
     .then(async res => {
       let dataReceived = Object.values(res.data);
       console.log(dataReceived);
       this.showPins = await dataReceived.map(val => <div key={val} class="ui steps"><div class="step">{val}</div></div>)
        this.setState({pinsCollected: true})
     })
     .catch(err => console.log(err))

  }
  render() {
    const containerDiv = this.state.pinsCollected ? this.showPins : <div class="ui active centered inline loader"></div>
    return (
      <div className="ui container">
        <h2 className="header">1000 UNIQUE PINS Below</h2>
        <br/>
        {containerDiv}
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);