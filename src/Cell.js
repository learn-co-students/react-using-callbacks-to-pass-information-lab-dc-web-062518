import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () =>{
    //set state based on handle cell prop
    this.setState({
      color: this.props.handleCell()
    })
  }

  render() {
    return (
      <div
        onClick={(e) => {
          this.handleClick()
        }}
        className="cell"
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
