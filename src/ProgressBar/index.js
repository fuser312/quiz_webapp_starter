import React, {useEffect, useState} from "react";
import './style.css';
import props from "../Quiz";


export default class ProgressBar extends React.Component {
    constructor() {
        super(props);
        this.intervalId = null;
        this.state = {
            width: 100,
            color: "green",
            text: "GO"
        };
    }

    componentDidMount() {
        let countDown = 100;
        this.intervalId = setInterval(() => {
            if (this.props.questionAnswered) {
                clearInterval(this.intervalId)
            }
            if (countDown === 0) {
                clearInterval(this.intervalId)
                if (typeof this.props.handleOptionClickedQuestion === 'function') {
                    this.props.handleOptionClickedQuestion();
                }
            }
            if (countDown < 66) {
                this.setState({color: "yellow"})
                this.setState({text : "Hurry Up"})
            }
            if (countDown < 33) {
                this.setState({color: "red"})
                this.setState({text : ""})
            }
            countDown = countDown - 1;
            this.setState({width: countDown})

        }, 100)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className={"progressBar"}>
                <div className="progress" style={{width: this.state.width + "%", background: this.state.color}}>
                    {this.state.text}
                </div>
            </div>
        )
    }
}