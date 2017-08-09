import React from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends React.Component {

  render() {
    console.log('Props:', this.props)
    return (
      <div>
        <h1>Hello </h1>
      </div>
    )
  }
}

function mapStateToProps (calendar) {
 const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

 return {
   calendar: dayOrder.map((day) => ({
     day,
     meals: Object.keys(calendar[day]).reduce((meals, meal) => {
       meals[meal] = calendar[day][meal]
         ? calendar[day][meal]
         : null

       return meals
     }, {})
   })),
 }
}

function mapDispatchToProps(dispatch){
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps)(App);