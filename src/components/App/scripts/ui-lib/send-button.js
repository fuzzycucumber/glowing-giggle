import React from 'react'

const divStyle = {
    width: 250
    // color: 'white',
    // backgroundImage: 'url(' + imgUrl + ')',
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

export default class SendButton extends React.Component{
  render(){
    return(
      <div>
        <div className="row send-button">
          <div className="row"><div className="col-xs-3 col-xs-offset-3" style={divStyle} >
             <input type="text" className="form-control" id="email"/>
          </div></div>
          <div className="row">&nbsp;</div>
          <div className="row"><div className="col-xs-3 col-xs-offset-3" >
              {(this.props.skippable)?<a href="#" onClick={this.props.nextFunc} className="btn btn-default">Skip</a>:null}
              &nbsp;
              <a href="#" className="btn btn-success" onClick={this.props.nextFunc}>Send (Upcom Ft 🚧)</a>
          </div></div>
        </div>
    </div>
    );
  }
}
