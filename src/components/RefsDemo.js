import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
        
      this.inputRef = React.createRef();
      this.cdRef = null
      this.setcdRef = (element) => {
        this.cdRef = element
      }
    }

    componentDidMount() {

        if(this.cdRef){
            this.cdRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setcdRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo