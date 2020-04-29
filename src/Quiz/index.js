import React from "react";
import Question from "../Question";
import Option from "../Option";
import ProgressBar from "../ProgressBar";
import './styles.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


class Quiz extends React.Component {
    state = {
        score: 0,
        selectedOption: null,
        hasAnswered: false,
        currentQuestionIndex: 0,


    };

    questions = [
        {
            'text': "Who is current PM of India?",
            'options': ['Narendra Modi', 'Rahul Gandhi', 'Manmohan Singh', 'Sonia Gandhi'],
            'correct_choice': 0
        },
        {
            'text': "What is capital of Orissa?",
            'options': ['Chandigarh', 'Bhubaneshwar', 'Tripura', 'Nagaland'],
            'correct_choice': 1
        },
        {
            'text': "In the context to India's wild life, the flying fox is a __?",
            'options': ['Bat', 'Vulture', 'Stok', 'Kite'],
            'correct_choice': 0
        },
        {
            'text': 'What percentage of land area should remain covered by forest to maintain Ecological balance?',
            'options': ['10%', '33%', '5%', 'None of these'],
            'correct_choice': 1
        },
        {
            'text': ' The purest form of iron is',
            'options': ['Wrought iron', 'Steel', 'Pig iron', 'Nickel steel'],
            'correct_choice': 0
        },
        {
            'text': 'Layer of atmosphere in which Ozone layer lies is',
            'options': ['Exosphere', 'Mesosphere', 'Troposphere', 'Stratosphere'],
            'correct_choice': 3
        },
    ];

    userAnswer = [];

    handleOptionClicked = (id) => {
        this.userAnswer.push(id);

        if (!this.state.hasAnswered) {
            let copyCurrentQuestionIndex = this.state.currentQuestionIndex;
            copyCurrentQuestionIndex = copyCurrentQuestionIndex + 1;

            let newScore = this.state.score;

            if (id === this.question.correct_choice) {
                newScore = newScore + 10;
            }
            this.setState({
                selectedOption: id,
                score: newScore,
                questionAnswered: true,

            });
            //
            // console.log(this.userAnswer);
            // console.log(this.state.selectedOption);
            // console.log(`hi, this is : ${this.state.selectedOption}`);

            setTimeout(() => {
                if (copyCurrentQuestionIndex === this.questions.length-1) {
                    this.props.history.push({
                            pathname: "/result",
                            state: {
                                score: newScore,
                                questions : this.questions,
                            }
                        }
                    )
                } else {
                    this.setState({
                        selectedOption: null,
                        questionAnswered: false,
                        currentQuestionIndex: copyCurrentQuestionIndex,
                    });
                }
            }, 3000);
        }
    }

    question;
    showOptions() {
        let currentQuestion = this.questions[this.state.currentQuestionIndex];
        return currentQuestion.options.map((option) => {
            return <Option isCorrectOption={currentQuestion.options.indexOf(option) === currentQuestion.correct_choice} text={option}
                           isSelected={this.state.selectedOption === currentQuestion.options.indexOf(option)}
                           optionClicked={this.handleOptionClicked
                           } id={currentQuestion.options.indexOf(option)}/>
        })
    }

    render() {
        // if (this.state.currentQuestionIndex < this.questions.length - 1)
        this.question = this.questions[this.state.currentQuestionIndex];
        //alert(`the index is ${this.state.currentQuestionIndex}`);

        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question questionText={this.question.text}/>
                <div className="options-container">
                    {this.showOptions()}
                  
                </div>
                <ProgressBar key={this.state.currentQuestionIndex} questionAnswered={this.state.questionAnswered}
                             handleOptionClickedQuestion={() => this.handleOptionClicked()}
                             queIndex={this.state.currentQuestionIndex}/>
            </div>
        );
    }
}


export default Quiz;

