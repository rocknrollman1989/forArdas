import React, { Component } from 'react';
import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTasksForTaskManager } from './actions/taskAction';


//components
import Header from './components/Header/index';
import Home from './components/Home/index';
import TasksTabble from './components/TasksTabble/index';
import NotFound from './components/NotFound/index';


class App extends Component {

  componentDidMount(){
    this.props.getTasksForTaskManager();
  }

  render() {
    return (
      <BrowserRouter>
         <div className="backGround">
          <Header/>
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route  path='/task_page' component={TasksTabble}/>
            <Route  component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getTasksForTaskManager: () => {dispatch(getTasksForTaskManager());}
  };
};

export default connect(null, mapDispatchToProps)(App);
