import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        this.setState({
            count : this.state.count+1
        },
        () =>{
            console.log('Callback value', this.state.count);
        })
        console.log(this.state.count);


       

        // this.setState((prevState , props) => ({
        //     count:prevState.count+1
        // }) )
        // console.log(this.state.count);
    }

    // incrementFive() {
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
    setCount(){
        this.setState({
            count:0
        },
        () => {
            console.log('callback value',this.state.count);
        })
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        },
    () =>{
        console.log('callback value', this.state.count);
    })
       console.log(this.state.count); 
    }

   

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.setCount()}>SetCount</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter;