import React, {useState} from "react";
import './styles.css';
import Confetti from 'react-dom-confetti';

export default function Option(props) {
    //const [isSelected, setSelected] = useState((false));

    return (
        <div
            className={props.isSelected ? (props.isCorrectOption ? 'correct-option option' : 'wrong-option option') : 'option'}
            onClick={() => props.optionClicked(props.id)}>
            <Confetti active={ props.isCorrectOption && props.isSelected } />
            {props.text}

        </div>
    )
}

// onClick={() =>setSelected(!isSelected)}>