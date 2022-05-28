import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'
import UserGreeting from './userGreeting'

function Quizarea(props) {

    if(props.isFinished){
        return (<UserGreeting grade={props.grade}/>)
    }
    return (
        <div className="area">
           
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
            
        </div>
    )
}

export default Quizarea
