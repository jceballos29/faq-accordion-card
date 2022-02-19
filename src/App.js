import { useState } from "react";
import "./App.css";

import questions from "./utils/questions";

import chevron from "./images/icon-arrow-down.svg";
import faqImageDesktop from "./images/illustration-woman-online-desktop.svg";
import faqImageMobile from "./images/illustration-woman-online-mobile.svg";
import box from "./images/illustration-box-desktop.svg"

import backgroundMobile from "./images/bg-pattern-mobile.svg"
import backgroundDesktop from "./images/bg-pattern-desktop.svg"

const mobile = window.innerWidth <= 860;

function App() {
    const [selectedQuestion, setSelectedQuestion] = useState(-1);

    const handleSelectedQuestion = (id) => {
        selectedQuestion === id
            ? setSelectedQuestion(-1)
            : setSelectedQuestion(id);
    };

    return (
        <div className="App">
            <div className="card">
                <img src={box} alt="Box" className="card__box__desktop" />
                <div className="card__header">
                    <img
                        src={mobile ? faqImageMobile : faqImageDesktop}
                        alt="Faq Woman"
                        className={"card__faq__image"}
                    />
                    <img src={mobile ? backgroundMobile : backgroundDesktop} alt="Shadow Background" className="card__header__background"/>
                </div>
                <div className="card__body">
                    <h1>FAQ</h1>
                    <ul className="card__questions">
                        {questions.map(({ id, question, answer }) => (
                            <li
                                key={id}
                                className={
                                    selectedQuestion === id
                                        ? "card__question__selected"
                                        : "card__question"
                                }
                                onClick={() => {
                                    handleSelectedQuestion(id);
                                }}
                            >
                                <div className="card__question__header">
                                    <h3>{question}</h3>
                                    <img
                                        src={chevron}
                                        alt="Arrow"
                                        className="card__question__icon"
                                    />
                                </div>
                                <div className="card__question__body">
                                    <p>{answer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
