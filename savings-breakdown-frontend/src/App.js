import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './styles/App.css';
import AddSavingCategory from './components/AddSavingCategory/AddSavingCategory';
import SavingCategoriesDashboard from './components/SavingCategory/SavingCategoriesDashboard';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { categoriesFetchData, updateCategoryAmount } from './actions/categoriesActionCreator';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    this.getCategories().then((res) => {
      dispatch(categoriesFetchData(res))
    });
  }

  getCategories = async () => {
    let response = await fetch('/getCategories');
    let categories = await response.json();
    return categories;
  }

  updateAmount = (id, newAmount) => {
    // this.setState({
    //   savingCategories: this.state.savingCategories.map(category => {
    //     if(category.id === id) category.currentAmount = newAmount;
    //     return category;
    //   })
    // });
  }

  removeGoal = (id) => {
    // this.setState({
    //   savingCategories: [...this.state.savingCategories.filter(category => category.id !== id)]
    // });
  }

  addNewGoal = (name, goal) => {
    // let newGoal = {
    //   id: uuid.v4(),
    //   name,
    //   currentAmount: 0,
    //   goal
    // }
    // this.setState({
    //   savingCategories: [...this.state.savingCategories, newGoal]
    // });
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

const mapDispatchToProps = (dispatch) => {
  return {
      // fetchData: (url) => dispatch(categoriesFetchData(url)),
      // updateAmount: (id, newAmount) => dispatch(updateCategoryAmount(id, newAmount))
  };
};

const linkStyle = {
  textDecoration: 'none',
  color: 'lightGray'
}

export default connect(mapStateToProps)(App);
