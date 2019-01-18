import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="backGround">
          {/* <Header/> */}
          <Switch>
            {/* <Route  exact path='' component={Home}/>
            <Route  path='' component={}/>
            <Route  path='' component={}/> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
