import React from 'react'
        import ReactDOM from 'react-dom'
        import $ from 'jquery';
import Questionnaire from './questionnaire.js'
        import {ERRORMSG, QUESTIONNAIRE_NAME, QUESTIONS_JSON} from '../configs/configs.js'
        import Navbar from './ui-lib/navbar.js'
import ColumnChart from 'react-chartkick'

import  BarChart from 'recharts'
import  Bar  from 'recharts'
import  XAxis from 'recharts'
import  YAxis from 'recharts'
import  CartesianGrid  from 'recharts'
import  Tooltip  from 'recharts'
import  Legend from 'recharts'

        export default class AppQuestionnaire extends React.Component
{
    //ReactDOM.render(<Navbar title={QUESTIONNAIRE_NAME} />, document.getElementById('nav'));

    componentDidMount() {
        $.getJSON(QUESTIONS_JSON)
                .done(function (data) {
                    ReactDOM.render(<div>
                        <Questionnaire
                            questions={data}
                          //  assessmentId={_generateUniqueId}
                        />
                    </div>, document.getElementById('questions'));
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    ReactDOM.render(<div className='well'>
                        {ERRORMSG}
                    </div>, document.getElementById('content'));
                    console.log('failed to get questions.json ' + textStatus);
                });
    }
}
