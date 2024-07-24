import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'world'
      }
      console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props , state){
        console.log('LifecyleB getDerivedStateFromprops');
        return null
    }

    componentDidMount() {
        console.log('LifecycleB didmount');
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldcomponentupdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB getsnapshotbeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidupdate');
    }

  render() {

    console.log('LifecycleB render');
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB