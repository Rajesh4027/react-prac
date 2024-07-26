import React, { Component } from 'react'
import Purecomp from './Purecomp'
import Regcomp from './Regcomp'

class Parentcomp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'world'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'world'
            })
        },2000)
    }
  render() {
    console.log('****************Parent Component render****************');
    return (
      <div>
        Parent Component
        <Regcomp name={this.state.name}></Regcomp>
        <Purecomp name={this.state.name}></Purecomp>
      </div>
    )
  }
}

export default Parentcomp