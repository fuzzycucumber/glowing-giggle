import React from 'react'
import {store} from '../store.js'
import $ from 'jquery';
import Iframe from 'react-iframe'
import {Bar, Polar} from 'react-chartjs-2'

const divStyle = {
    width: 250,
    height: 500,
    marginTop: 0,
    marginLeft: 'auto',
    marginBottom: 0,
    marginRight: 'auto',
    position: 'relative'
  };

//not used
  const divStyleChild = {
      width: 250,
      height: 400,
      marginTop: 0,
      marginBottom: 0,
      marginRight: 'auto',
       marginLeft:  -125,
      position: 'absolute',
      flex: 0.5
    };
    /* This React Component is used to send the result to your API or server.
*/
export default class ClosingMessage extends React.Component{
  constructor(){
    super();
    this.state = {
      saved: false,
      choices: "",
      chartData: {
        // labels: ['Dominance', 'Influence', 'Steadiness', 'Conscientiousness'],
      //  labels: ['(D)ominance', '(I)nducement', '(S)ubmission', '(C)ompliance'],
      //labels: ['D', 'I', 'S', 'C'],
        labels: ['Results'],
        datasets: [
          {
            label: '(D)ominance',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [14]
          },
          {
            label: '(I)nducement',
            backgroundColor: 'rgba(255,206,86,0.2)',
            borderColor: 'rgba(255,206,86,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,206,86,0.4)',
            hoverBorderColor: 'rgba(255,206,86,1)',
            data: [64]
          },
          {
            label: '(S)ubmission',
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [86]
          },
          {
            label: '(C)ompliance',
            backgroundColor: 'rgba(54,162,235,0.2)',
            borderColor: 'rgba(54,162,235,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54,162,235,0.4)',
            hoverBorderColor: 'rgba(54,162,235,1)',
            data: [39]
          }
        ]
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: false,
        legend: {
          position: 'top',
        },
        title: {
            display: true,
            text: 'Martson\'s DISC in Classic Representation'
        },
        scales: {
          yAxes: [{
              ticks: {
                  min: 0,
                  max: 100,
                  type: 'logarithmic'
              }
          }]
      }
    },
    polarData:{
      datasets: [{
         data: [
           100,
           100,
           100,
           100
         ],
         backgroundColor: [
           '#FF6384',
           '#FFCE56',
           '#4BC0C0',
           '#36A2EB'
         ],
         label: 'My dataset' // for legend
       }],
       labels: [
         '(D)ominance - Red',
         '(I)nducement - Yellow',
         '(S)ubmission - Green',
         '(C)ompliance - Blue'
       ]
    },
      polarOptions: {
        startAngle: -0.5 * Math.PI,
        maintainAspectRatio: false,
        responsive: false,
        legend: {
          position: 'top',
        },
        title: {
            display: true,
            text: 'Martson\'s DISC with Ratio'
        }
      }

    }
  }



    // _handler(choices){
    //   $.ajax({
    //       type:"POST",
    //       url: this.props.posturl,
    //       data: JSON.stringify({"responses":choices}),
    //       contentType: 'application/json',
    //       success: function(res) {
    //           console.log(res);
    //           console.log("sent!!!");
    //       }.bind(this),
    //       error: function(xhr, status, err) {
    //           console.error(xhr, status, err.toString());
    //       }.bind(this)
    //   });
    // }


    _handler(choices){
      // $.ajax({
      //     type:"POST",
      //     url: this.props.posturl,
      //     data: JSON.stringify({"responses":choices}),
      //     contentType: 'application/json',
      //     success: function(res) {
      //         console.log(res);
      //         console.log("sent!!!");
      //     }.bind(this),
      //     error: function(xhr, status, err) {
      //         console.error(xhr, status, err.toString());
      //     }.bind(this)
      // });

      fetch( this.props.posturl , {
        method: 'POST',
        redirect: 'manual',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {"responses":choices} )
      })
      // .then(res => res.json())
      // .then(
      //   (result) => {
      //     console.log(result);
      //     console.log("sent!!!");
      //   },
      //   // Note: it's important to handle errors here
      //   // instead of a catch() block so that we don't swallow
      //   // exceptions from actual bugs in components.
      //   (error) => {
      //         console.error(error.toString());
      // }) //then

    }//_handler



  _saveResponses(){
    let choices = JSON.stringify(store());
    let assess = [];
    assess.push(store()) ;
    let responses = Object.assign({},assess, choices);
    console.log("responses ==> ")
    console.log(choices)
  //  alert(JSON.stringify(assess));
    //assess = choices[3];
    console.log("split ==> ")
    let resp = assess[0][2]
      console.log(resp)
//     for (var i = 0; i < resp.length; i++) {
//       let res = resp[i].split('-');
//       //   switch(res[0]) {
//       //     case 'L':
//       //
//       //     console.log('okk in L')
//       //
//       //       case 'M':
//       //
//       //       console.log('okk in M')
//       //
//       // }
//
// if ( res[0] === 'L') {
// // switch(res[2]) {
// //   case 'D':
// // }
//
// console.log('okk in L')
// }
// if ( res[0] === 'M') console.log('okk in M')
//
//
// }//for




    //logic parsing & calculation
      var mD = 0, mI = 0, mS = 0, mC = 0;
      var lD = 0, lI = 0, lS = 0, lC = 0;
      var aD = 0, aI = 0, aS = 0, aC = 0;

      for (var i = 0, len = resp.length; i < len; i++) {
      //console.log(resp[i]);
      var t = resp[i].split("-");
      if ( t[0].includes("M") ) ( t[2].includes("D") ? mD++ : ( t[2].includes("I") ? mI++ : ( t[2].includes("S") ? mS++ : ( t[2].includes("C") ? mC++ : 0 ) ) ) )
      if ( t[0].includes("L") ) ( t[2].includes("D") ? lD++ : ( t[2].includes("I") ? lI++ : ( t[2].includes("S") ? lS++ : ( t[2].includes("C") ? lC++ : 0 ) ) ) )
      //console.log("mD: " + mD + " mI: " + mI + " mS: " + mS + " mC: " + mC );
      //console.log("lD: " + lD + " lI: " + lI + " lS: " + lS + " lC: " + lC );
    };

    console.log("mD: " + mD + " mI: " + mI + " mS: " + mS + " mC: " + mC );
    console.log("lD: " + lD + " lI: " + lI + " lS: " + lS + " lC: " + lC );
      aD = mD - lD , aI = mI - lI , aS = mS - lS , aC = mC - lC ;
      console.log("aD: " + aD + " aI: " + aI + " aS: " + aS + " aC: " + aC );
    var Ares = []; Ares.push(aD); Ares.push(aI); Ares.push(aS); Ares.push(aC);
console.log("Ares => ");
console.log(Ares)

//console.log(this.state.chartData.datasets )
//var disc = ["d", "i", "s", "c"];
var disc = ["d", "d", "d", "d"];
var score = [0, 0, 0, 0];
  for (var i = 0, len = Ares.length; i < len; i++) {
    let query = Ares[i] + disc[i];
    console.log("query => " + query)
    var arrD = [["-17d","1"],["-14d","3"],["-12d","5"],["-11d","6"],["-10d","8"],["-9d","11"],["-7d","15"],["-5d","20"],["-4d","25"],["-3d","30"],["-2d","35"],["-1d","40"],["0d","48"],["1d","50"],["2d","55"],["3d","60"],["4d","65"],["5d","70"],["7d","80"],["8d","84"],["9d","88"],["10d","90"],["11d","92"],["12d","95"],["13d","98"],["15d","99"]];
    var flat = [].concat.apply([], arrD);
    var col = flat.indexOf(query);
    var scoreD = 0;
    console.log("col ==> " + col)
    if (col != -1) {// found, now need to extract the row
     scoreD = flat[++col];
    }
    console.log("score D ==> " + scoreD);
    score[i] = scoreD
}

  console.log("score ==> " + score);

this.state.chartData.datasets.forEach((dataset, i) => {
    dataset.data[0] = score[i];
});
//this.state.chartData.update();


       console.log(assess[0][2])
    let me = this;
    // $.post(this.props.posturl,{"responses":choices})
    // .done(function(data){
    //   if(data === "OK"){
    //   //  me.setState({saved:true});
    //   }else{
    //     // Try again?
    //   }
    // });

    //this.preventDefault();
  //  this._handler(choices);


  }//_saveResponses

componentWillMount(){
  this.state.choices =  JSON.stringify(store());
  this._handler(this.state.choices);
}

  componentDidMount(){

    this._saveResponses();
  }



  render(){
    return(
      <div className="well">
      <div><h1 className="text-center">{this.props.message}</h1><p className="text-center">{this.props.tip}</p></div>
      <div className="row" style={divStyle} >
        <div className="row" >
            ------------------------------------
            <Bar
                     data={this.state.chartData}
                     width={250}
                     height={400}
                     options={this.state.chartOptions}
                   />
            ------------------------------------
          </div>

          </div>
            <div className="row" style={divStyle} >
          <div className="row ">
            ------------------------------------
            <Polar
                     data={this.state.polarData}
                     width={250}
                     height={350}
       options={this.state.polarOptions}
                   />
            ------------------------------------
          </div>
          </div>
      </div>
    );
  }

}
