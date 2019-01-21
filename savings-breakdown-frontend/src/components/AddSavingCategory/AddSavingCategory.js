import React, { Component } from 'react'
import NumberFormat from 'react-number-format';

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

  onSubmit = (e) => {
    e.preventDefault();
    let convertedNumber = Number(this.state.goal.replace(/[^0-9\.-]+/g,""))
    this.props.addNewGoal(this.state.name, convertedNumber);
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

export default AddSavingCategory
