import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeColor: "#F00"
    }
  }

  setSelectedColor = (hex) => {
    // console.log(hex);
    this.setState({
      activeColor: hex
    })
    console.log(this.state.activeColor);
  }

  getActiveColor = () => {
    //hands active color to handle cell
    return this.state.activeColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell handleCell={this.getActiveColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleColorSelector={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
