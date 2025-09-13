/**src/components/App/index.js
 */

import React, { PropTypes, Component }
from 'react';
//import AppQuestionnaire from './scripts/app.js';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import ColumnChart from 'react-chartkick';
//import {QUESTIONNAIRE_NAME} from './configs/configs.js';
//import Navbar from './scripts/ui-lib/navbar.js';
import logo from './logo.svg';
import './styles/main.css';
import $ from 'jquery';
import Questionnaire from './scripts/questionnaire.js'
        import {ERRORMSG, QUESTIONNAIRE_NAME}
from './configs/configs.js'
        import QUESTIONS_JSON from './configs/questions.json';
import Navbar from './scripts/ui-lib/navbar.js';

import  BarChart from 'recharts'
import  Bar  from 'recharts'
import  XAxis from 'recharts'
import  YAxis from 'recharts'
import  CartesianGrid  from 'recharts'
import  Tooltip  from 'recharts'
import  Legend from 'recharts'

        class App extends Component {
// static propTypes = {}
// static defaultProps = {}
// state = {}
//ReactDOM.render(<Navbar title={QUESTIONNAIRE_NAME} />, document.getElementById('nav'));


    _generateUniqueId() { return Math.random().toString(36).substr(2, 9); }

    _uniqueAssessmentId =  Math.random().toString(36).substr(2, 9);

    render() {
        const {className, ...props} = this.props;

        //const _zassessmentId = this._generateUniqueId();

        return (
                /*                <div className={classnames('App', className)} {...props}>
                 <div className="App-header">
                 <img src={//logo} className="App-logo" alt="logo" />
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
                 */
//<div id="nav"></div>
//<img src="images/ripple.gif" id="loader" style="position:absolute;top:50%;left:45%;"/>
                <div className={classnames('App', className)} {...props}>
                    <div id="nav"><Navbar title={QUESTIONNAIRE_NAME} /></div>
                    <div className="container">

                        <div class="questions" id="questions" >
                            <Questionnaire
                            questions={QUESTIONS_JSON}
                            //assessmentId={this._generateUniqueId()}
                            assessmentId={this._uniqueAssessmentId}
                            />
                        </div>
                        <div class="content" id="content" >

                        </div>
                    </div>
                    <br/>
                    <br/>
                    <footer class="footer">  Fait avec ♥️ par <a href="https://insideconsulting.io"> Inside Consulting.</a>
                    </footer>
                </div>
                );
    }
    /*
     * To get Remotly the questionnaire / questions list
     * to be tested....
     componentDidMount() {
     $.getJSON(QUESTIONS_JSON)
     .done(function (data) {
     ReactDOM.render(<div>
     <Questionnaire questions={data}/>
     </div>, document.getElementById('questions'));
     })
     .fail(function (jqXHR, textStatus, errorThrown) {
     ReactDOM.render(<div className='well'>
     {ERRORMSG}
     </div>, document.getElementById('content'));
     console.log('failed to get questions.json ' + textStatus);
     });

     */



}
export default App;
