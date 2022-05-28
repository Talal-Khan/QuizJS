import React, { Component } from 'react'
import './questionnaire.css'
import dataSet from '../api/dataset'
import Quizarea from './Quizarea'
import ScoreArea from './ScoreArea'

class Questionnaire extends Component {
    constructor()
    {
        super();
        this.state={
            current:0,
            dataset:dataSet,
            correct:0,
            incorrect:0,
            isFinished:false,
            grade:null,
        }

        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(choice){
        if(choice==this.state.dataset[this.state.current].correct){
            this.setState({
                correct:this.state.correct+1,
            })
        }else{
            this.setState({
                incorrect:this.state.incorrect+1,
            })
        }

        if(this.state.current==this.state.dataset.length-1){
            this.setState({
                isFinished:true,
                
            })

        }else{
            this.setState({
                current:this.state.current+1,
            })
        }

            if(this.state.incorrect>=this.state.dataset.length-2)
            {
                this.setState({
                    grade:"Fail",
                })
            }else{
                this.setState({
                    grade:"Pass"
                })
            }
        
        
        
    }

    render() {
        return (
            <div>
                <h1>Javascript Quiz</h1>
                <Quizarea handleClick={this.handleClick} grade={this.state.grade} isFinished={this.state.isFinished} dataSet={this.state.dataset[this.state.current]}/>
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect}/>
            </div>
        )
    }
}

export default Questionnaire
