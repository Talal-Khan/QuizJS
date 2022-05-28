import React from 'react'
import Totalcorrect from './Totalcorrect'
import TotalIncorrect from './TotalIncorrect'

function ScoreArea(props) {
    return (
        <div className="scoreWrapper">
            <Totalcorrect correct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea
