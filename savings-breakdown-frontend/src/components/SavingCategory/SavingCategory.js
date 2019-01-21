import React, { Component } from 'react'
import ChangeAmountInput from './ChangeAmountInput';
import NumberFormat from 'react-number-format';
import { Line } from 'rc-progress';

import '../../styles/CategoryContainer.css';

export class SavingCategory extends Component {
  render() {
    return (
      <div className="outterDiv">
        <h4 className="deleteBtn" onClick={this.props.removeGoal.bind(this,this.props.category.id)}>X</h4>
        <h3> { this.props.category.name } </h3>
        Amount Saved: <NumberFormat thousandSeparator={true} prefix={'$'} value={this.props.category.currentAmount} displayType="text"/> <br/>
        Goal: <NumberFormat thousandSeparator={true} prefix={'$'} value={this.props.category.goal} displayType="text"/>
        <Line percent={(this.props.category.currentAmount/this.props.category.goal) * 100} strokeWidth="4" strokeColor="#4acadb"/>
        <ChangeAmountInput id = {this.props.category.id} currentAmount={this.props.category.currentAmount} updateAmount={this.props.updateAmount}/>
      </div>
    )
  }
}

export default SavingCategory
