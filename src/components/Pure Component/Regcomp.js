import React, { Component } from 'react'


class Regcomp extends Component {
  render() {
    console.log('Regular Component render');
    return (
      <div>
        Regular component {this.props.name}
      </div>
    )
  }
}

export default Regcomp