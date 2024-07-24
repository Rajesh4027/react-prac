import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'world'
      }
      console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props , state){
        console.log('LifecyleA getDerivedStateFromprops');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA didmount');
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldcomponentupdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA getsnapshotbeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidupdate');
    }

    changeState = () => {
        this.setState({
            name:'codevoluation'
        })
    }   

   

  render() {

    console.log('LifecycleA render');
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
      
    )
  }
}

export default LifecycleA