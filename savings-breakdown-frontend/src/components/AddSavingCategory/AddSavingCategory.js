import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/categoriesActionCreator';
import uuid from 'uuid';

export class AddSavingCategory extends Component {

  state = {
    name: '',
    goal: 0
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  postCategory = async () => {
    let { name, goal } = this.state;
    let newCategory = {
      id: uuid.v4(),
      name,
      currentAmount: 0,
      goal
    }
    await fetch('/categories', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory)
    })
    .then((res) => {
      console.log(res);
    })
  }

  onSubmit = (e) => {
    const { dispatch } = this.props;
    const { name, goal } = this.state;
    e.preventDefault();
    this.postCategory().then((res) => {
        let convertedNumber = Number(goal.replace(/[^0-9\.-]+/g,""));
        dispatch(addCategory(name, convertedNumber));
    });
  }

  render() {
    return (
      <form style={formStyle}>
        <input onChange = {this.onChange} style={inputStyle} name="name" type="text" placeholder="What are you saving for?"/> <br/>
        <NumberFormat onChange = {this.onChange} style={inputStyle} name="goal" type="text" 
          placeholder="How much do you want to save?" thousandSeparator={true} prefix={'$'}/> <br/>
        <input onChange = {this.onChange} style={inputStyle} type="submit" value="Add New Savings Goal"
          onClick={this.onSubmit}
        /> <br/>
      </form>
    )
  }
}

const inputStyle = {
  width: '40%'
}

const formStyle = {
  paddingTop: '5%'
}

export default connect() (AddSavingCategory)
