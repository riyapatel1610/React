import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class LifecycleMethod extends Component {
    constructor(){
        super();
        console.log("------constructor-----");
        this.state={
            count:0,
            
        }
    }

    componentDidMount(){
        console.log("-------componentDidMount-----------");
        alert("------componentDidMount-------")
    }
    componentDidUpdate(){
        console.log("-----componentDidUpdate-------");
        alert("------componentDidUpdate------")
    } 
    componentWillUnmount(){
      alert("-----componentWillUnmount------")
    }
  render() {
    console.log("------render-------");
    return (
      <div>LifecycleMethod
        <h1>{this.state.count}</h1>

        <Button color='danger'onClick={()=>this.setState({count:this.state.count+1})}>Button</Button>
      </div>
      
    )
  }
}
