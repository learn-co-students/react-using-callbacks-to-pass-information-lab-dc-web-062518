import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }


  setColor = (color) => {
   this.setState({
     color: this.props.getColor()
   }, ()=> console.log(this.state.color))
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.setColor}>
        </div>
    )
  }


// onClick={() => resetColor(this.props.color)

}
