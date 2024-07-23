import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            option: 'React'

        }
    }

    onChangehandleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    onChangeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    onChangeOption = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.option}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label >Username</label>
                    <input type="text" value={this.state.username} onChange={this.onChangehandleUsername} />
                </div>
                <div>
                    <label >Comments</label>
                    <textarea value={this.state.comments} onChange={this.onChangeComments}></textarea>
                </div>
                <div>
                    <label >Topic</label>
                    <select value={this.state.option} onChange={this.onChangeOption}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form