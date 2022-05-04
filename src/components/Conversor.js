import React, { Component } from 'react'

import './Conversor.css';


export default class Conversor extends Component {
    constructor(props){
        super(props);

    this.state = {
        moedaA_value: "",
        moedaB_value:0,
    }
    this.converter = this.converter.bind(this);
    }

    converter (){
let from_to = `${this.props.moedaA}_${this.props.moedaB}`;
let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=36fefde58788bbf5187c`
fetch (url).then(res=>{
    return res.json()

})   
.then(json=>{

    let price = json [from_to];
    let moedaB_value = ( parseFloat (this.state.moedaA_value) * price).toFixed(2);
    this.setState({moedaB_value})
})
}
render(){
    return (
        
      <div className="conversor">
       
      <h2>From {this.props.moedaA} to {this.props.moedaB} </h2>
      <input type="text" onChange={(event)=>{this.setState({moedaA_value:event.target.value})}}></input>
      <button type="button" value ="Convert" onClick={(this.converter)}>$</button>
    <h2> {this.state.moedaB_value}</h2>

      </div>
    )
}
}