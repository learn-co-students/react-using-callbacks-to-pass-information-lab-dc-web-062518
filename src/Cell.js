import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }

  }

  setColor= ()=>{
    this.setState({
      color: this.props.colorToCell()
    })
  }

  render() {
    return (
      <div onClick={this.setColor}  className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
