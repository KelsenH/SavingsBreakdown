import React, { Component } from 'react'
import SavingCategory from './SavingCategory';

export class SavingCategoriesDashboard extends Component {
  render() {
    return (
      <div>
      {this.props.categories.map(category => {
        return <SavingCategory key={category.id} category={category} 
          updateAmount={this.props.updateAmount} removeGoal={this.props.removeGoal}/>
      })}
      </div>
    )
  }
}

export default SavingCategoriesDashboard
