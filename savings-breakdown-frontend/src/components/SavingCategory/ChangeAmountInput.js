import React, { Component } from 'react'
import NumberFormat from 'react-number-format';

export class ChangeAmountInput extends Component {
  state = {
    currentAmount: this.props.currentAmount
  }

  handleInput = (e) => {
    let convertedToNumber = Number(e.target.value.replace(/[^0-9\.-]+/g,""));
    this.setState({
      currentAmount: convertedToNumber
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateAmount(this.props.id, this.state.currentAmount);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>Change Amount Saved</p>  
        <NumberFormat thousandSeparator={true} prefix={'$'} value={'$' + this.state.currentAmount} onChange={this.handleInput}/>
        <input type="submit" value="Update" />
      </form>
    )
  }
}

export default ChangeAmountInput
