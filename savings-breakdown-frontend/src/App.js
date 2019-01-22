import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './styles/App.css';
import AddSavingCategory from './components/AddSavingCategory/AddSavingCategory';
import SavingCategoriesDashboard from './components/SavingCategory/SavingCategoriesDashboard';

import { connect } from 'react-redux';
import { categoriesFetchData } from './actions/categoriesActionCreator';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(categoriesFetchData());    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Savings Breakdown</h1>
          <Link style = {linkStyle} to={'/'}>Dashboard</Link> | {' '}
          <Link style = {linkStyle} to={'/AddNewCategory'}>Add New Savings Goal </Link> <br/>
          <Route exact path='/' render={props => (
            <SavingCategoriesDashboard categories={this.props.categories} updateAmount={this.updateAmount} removeGoal={this.removeGoal} />
          )} />
          <Route path='/AddNewCategory' render={props => (
            <AddSavingCategory addNewGoal={this.addNewGoal} />
          )}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      categories: state.categories
  };
};

const linkStyle = {
  textDecoration: 'none',
  color: 'lightGray'
}

export default connect(mapStateToProps)(App);
