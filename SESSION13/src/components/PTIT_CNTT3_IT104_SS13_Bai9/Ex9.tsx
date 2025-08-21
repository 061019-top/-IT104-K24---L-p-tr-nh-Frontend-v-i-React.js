import React, { Component } from 'react'
type Company={
    name:string;
}
export default class Exercises9 extends Component <object,Company>{
    constructor(props:object){
        super(props)
        this.state={
            name:"Rikkei Academy"
        }
    }
    handleChange=()=>{
        this.setState({name:"Rikkei Sofi"})
    }
  render() {
    return (
      <div>
        <h3>Tên công ty :{this.state.name}</h3>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}