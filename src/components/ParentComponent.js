import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        parentname : "Parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        let a = prompt("enter the name")
        alert(`Hello ${this.state.parentname} ${childName}`)
        alert(`hello ${a}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent