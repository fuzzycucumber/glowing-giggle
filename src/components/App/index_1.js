/**src/components/App/index.js
 */

import React, { PropTypes, Component }
from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {
// static propTypes = {}
// static defaultProps = {}
// state = {}

    render() {
        const {className, ...props} = this.props;
        return (
                <div className={classnames('App', className)} {...props}>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                        <h3>A New Reveloution is coming...</h3>
                        <h4>Swiss Nova.... Brace Yourself!</h4>
                        <h2> 😁 </h2>
                    </div>
                    <p className="App-intro">
                        Hi Simo!
                        <br/>The moment of Thruth... After long hours... This is a it !
                        <br/>Finally an App in the Cloud, with the latest state of the Art JS Technology =)
                        <br/>See you!
                        <br/>Zak.
                    </p>
                </div>
                );
    }
}

export default App;