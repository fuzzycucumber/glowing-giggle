import React from 'react'
import {store} from '../store.js'
import $ from 'jquery';
import Iframe from 'react-iframe'
import ColumnChart from 'react-chartkick'
import LineChart from 'react-chartkick'
import  BarChart from 'recharts'
import  Bar  from 'recharts'
import  XAxis from 'recharts'
import  YAxis from 'recharts'
import  CartesianGrid  from 'recharts'
import  Tooltip  from 'recharts'
import  Legend from 'recharts'
import  'recharts'
/* This React Component is used to send the result to your API or server.
*/
export default class ClosingMessage extends React.Component{
  constructor(){
    super();
    this.state = {
      saved: false
    }

  const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  }


  _saveResponses(){
    let choices = JSON.stringify(store());
    let assess = [];
    assess.push(store()) ;
    let responses = Object.assign({},assess, choices);
  //  alert(JSON.stringify(assess));

    // let me = this;
    // $.post(this.props.posturl,{"responses":choices})
    // .done(function(data){
    //   if(data === "OK"){
    //     me.setState({saved:true});
    //   }else{
    //     // Try again?
    //   }
    // });

  }
  componentDidMount(){
    this._saveResponses();
  }



  render(){
    return(
      <div className="well">
      <div><h1 className="text-center">{this.props.message}</h1><p className="text-center">{this.props.tip}</p></div>

      ------------------------------------

      ------------------------------------

      </div>
    );
  }
}
