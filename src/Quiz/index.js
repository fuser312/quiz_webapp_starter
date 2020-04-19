import React from "react";
import Question from "../Question";
import Option from "../Option";
import ProgressBar from "../ProgressBar";
import './styles.css';


class Quiz extends React.Component {
    state = {
        score: 0,
        selectedOption: null,
        hasAnswered : false,
        currentQuestionIndex : 0

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



    handleOptionClicked = (id) => {

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

            setTimeout(() => {
                this.setState({
                    selectedOption: null,
                    questionAnswered: false,
                    currentQuestionIndex : copyCurrentQuestionIndex,
                });
            }, 3000);
        }
    }

    question;


    render() {
        // if (this.state.currentQuestionIndex < this.questions.length - 1)
            this.question = this.questions[this.state.currentQuestionIndex];
            //alert(`the index is ${this.state.currentQuestionIndex}`);

        return (
            <div className="header">
                <div className="score">Score: {this.state.score}</div>
                <Question questionText = {this.question.text}/>
                <div className="options-container">
                    <Option text={this.question.options[0]} id = {0} isSelected={this.state.selectedOption === 0} isCorrectOption={this.question.correct_choice === 0}
                            optionClicked={this.handleOptionClicked}/>
                    <Option text={this.question.options[1]} id = {1} isSelected={this.state.selectedOption === 1} isCorrectOption={this.question.correct_choice === 1}
                            optionClicked={this.handleOptionClicked}/>
                    <Option text={this.question.options[2]} id = {2} isSelected={this.state.selectedOption === 2} isCorrectOption={this.question.correct_choice === 2}
                            optionClicked={this.handleOptionClicked}/>
                    <Option text={this.question.options[3]} id = {3} isSelected={this.state.selectedOption === 3} isCorrectOption={this.question.correct_choice === 3}
                            optionClicked={this.handleOptionClicked}/>

                </div>
                <ProgressBar key={this.state.currentQuestionIndex} questionAnswered={this.state.questionAnswered} handleOptionClickedQuestion={() => this.handleOptionClicked()} queIndex={this.state.currentQuestionIndex}/>
            </div>
        );
    }
}


export default Quiz;

