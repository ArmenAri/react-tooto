import React from 'react';
import "./App.css"
import Card from "./components/Card"
import * as dataService from "./services/dataService"

class App extends React.Component {

  render() {
    this.a = dataService.pickRandomData()
    this.b = dataService.pickRandomData()
    return (
      <div className="center">
        <div className="App">
          <header className="App-header">
            <Card type="" title={this.a.title} desc={this.a.description} extra={this.a.extra} />
            <Card type="secret" title={this.b.title} desc={this.b.description} extra={this.b.extra} />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
