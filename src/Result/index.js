import React from "react";
import './styles.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";



export default function Result(props){
    return (
        <Link exact to={"/quiz_webapp_starter1/result"} >
            <div className="result">

               Result
            </div>
        </Link>

    )
}