import React from 'react'
import { store } from '../store.js'
import $ from 'jquery';


// Custom function to randomize/shuffle array
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/* This React Component is used to render a small array of options that could have one or more answers
*/
export default class SmallMostLeastOptions extends React.Component {
  constructor() {
    super();
  this.state = {
       listDataFromChild: null
   };
   this.listDataFromChild =  {
     upselect: false,
     downselect: false,
     cup: 0
   };
}

myCallback = (dataFromChild) => {
  console.log("context transmitted to parent");
  console.log(dataFromChild);
  // this.setState({ listDataFromChild: dataFromChild });
  this.listDataFromChild = dataFromChild;
  console.log(this.listDataFromChild);
}

  render() {
    const shuffledOptions = shuffleArray(this.props.options);
    let _generateOptions = (function (options, _assessmentId, _questionNumber, _dataFromChild, callbackFn) {
      return (
        <div className="row">
          <div className="col-md-4"></div>
          <ul className="col-md-4 options-ul" id={"ul-"+_questionNumber} >
            {options.map(function (option) {
              return (
                <Option
                  assessmentId= {_assessmentId}
                  questionNumber={_questionNumber}
                  selected={option.selected}
                  id={option.id}
                  key={option.id}
                  description={option.description}
                  attribute={option.attribute}
                  callbackFromParent={callbackFn}
                  dataSelected={_dataFromChild}
                ></Option>
              );
            }
            )
            }
          </ul>
        </div>
      );
    });
    $('.options-ul li').removeClass('selected');
    $('.options-ul li').addClass('unselected');
    return (
      <div>
        <h1 className="text-center">{this.props.question}</h1>
        {_generateOptions(shuffledOptions, this.props.assessmentId, this.props.questionNumber,this.listDataFromChild, this.myCallback)}
      </div>
    );
  }
}
class Option extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      up: false,
      down: false,
      cup: 0,
      cdown: 0,
      c1: -1
    };
    this.choice = '';

  }
  setSelectedState = () => {
     //[...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
     const listInfo = {
       upselect: false,
       downselect: false,
       cup: 0
     };
     listInfo.upselect = this.state.selected && (this.state.cup==1) ;
     listInfo.downselect = this.state.selected && (this.state.cdown==1) ;
     listInfo.cup = 1;
     console.log(this.state.selected )
     console.log(  (this.state.cup==1)  )

     this.props.callbackFromParent(listInfo);
 }
  render() {
    return (
      <li
      //className={(this.state.selected) ? ( (this.state.cup==1) ? "selected up" : ( (this.state.cdown==1) ?  "selected down" : "unselected" ) ) : "unselected"}
        className={ ((this.state.up) ) ? "selected up" : ( (this.state.down) ?  "selected down" : "unselected" )  }
        onClick= { (1===1) ? this._updateOptionRendering.bind(this) : null }
        key={this.props.id} id={"li-"+this.props.id}>
        <div
          className={(this.state.up) ? "icon-center up active" : "icon-center up"}
          onClick={ (1===1) ? this._addOptionUp.bind(this) : null } >
          <div className="thumbup"></div>
        </div>
        <div
          className={(this.state.down) ? "icon-center down active" : "icon-center down"}
          onClick={ (1===1) ? this._addOptionDown.bind(this) : null } >
          <div className="thumbdown"></div>
        </div>
        <a
          className={(this.state.selected) ? "select-link active" : "select-link"} >
          {this.props.description}
        </a>
      </li>
    );
  }

_checkClass(_clname){
var cpt = 0;
  $("#ul-"+this.props.questionNumber+" > li").each(function( index ){
     cpt +=  ( $(this).attr('class').indexOf(_clname) != -1 ) ? 1 : 0  ;
  });
  return ( cpt > 0);
}

_checkUpSelect(){
var ind = -1
  $("#ul-"+this.props.questionNumber+" > li").each(function( index ){
     var cls = $(this).attr('class');
      console.log("li-" + index + "=>" +  cls );
      if (  cls === "selected up"){
        console.log('selected index = ' + $(this).attr('id').substr(3));
        ind = $(this).attr('id').substr(3);
      }
  });
return ind;
}

_checkDownSelect(){
var ind = -1
  $("#ul-"+this.props.questionNumber+" > li").each(function( index ){
     var cls = $(this).attr('class');
      console.log("li-" + index + "=>" +  cls );
      if ( cls === "selected down" ){
        console.log('selected index = ' + $(this).attr('id').substr(3));
        ind = $(this).attr('id').substr(3);
      }
  });
return ind;
}

  _addOptionUp(event) {
    event.preventDefault();

  var index = this._checkUpSelect();
  console.log('get index ' + index  )
  console.log('props id ' + this.props.id  )
console.log( index === -1 ||  Number(index) ===  Number(this.props.id) )
if( index === -1 || Number(index) ===  Number(this.props.id)  ) {
      var val = "M-" + this.props.id + "-" + this.props.attribute;
      if (this.state.cup==0 ) {
          console.log('ok add option UP' )
        store(this.props.assessmentId, this.props.questionNumber, val, {
          ElementType: "multiple",
          type: "add",
        });
        this.state.cup=1;
        // this.setState({ selected: true });
        // this.state.selected = true;
      } else {
        console.log('remove option UP')
        store(this.props.assessmentId, this.props.questionNumber, val, {
          ElementType: "multiple",
          type: "remove",
        });
        this.state.cup=0;
        // this.setState({ selected: false });
        // this.state.selected = false;
      }

      this.setState({ down: false });
      this.setState({ up: !this.state.up });
      this.state.up = !this.state.up;

    this.setSelectedState();

}
}

  _addOptionDown(event) {
    event.preventDefault();
    var index = this._checkDownSelect();
    console.log('get index ' + index  )
    console.log('props id ' + this.props.id  )
  console.log( index === -1 ||  Number(index) ===  Number(this.props.id) )
  if( index === -1 || Number(index) ===  Number(this.props.id)  ) {
      var val = "L-" + this.props.id + "-" + this.props.attribute;
    if (this.state.cdown==0) {
      console.log('ok add option DOWN')
      store(this.props.assessmentId, this.props.questionNumber, val, {
        ElementType: "multiple",
        type: "add",
      });
      this.state.cdown=1;
      // this.setState({ selected: true });
      // this.state.selected = true;
    } else {
      console.log('remove option DOWN')
      store(this.props.assessmentId, this.props.questionNumber, val, {
        ElementType: "multiple",
        type: "remove",
      });
      this.state.cdown=0;
      // this.setState({ selected: false });
      // this.state.selected = false;
    }
    this.setState({ up: false });
    this.setState({ down: !this.state.down });
    this.state.down = !this.state.down;

        this.setSelectedState();
  } //if
}
  _updateOptionRendering(event) {
    event.preventDefault();
     (this.state.up == false  && this.state.down == false ) ? this.setState({selected: false}) : this.setState({selected: true}) ;
   }
}
