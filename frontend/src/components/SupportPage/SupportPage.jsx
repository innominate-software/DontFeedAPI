import React, { Component } from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import HelpButtons from "./HelpButtons";
import M from "materialize-css";
import FAQs from "./FAQs";

export default class SupportPage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: false,
            questions: [
                {question: "Question 1",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 2",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 3",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 4",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 5",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 6",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 7",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 8",
                    answer: "Lorem ipsum dolor sit amet."},
                {question: "Question 9",
                    answer: "Lorem ipsum dolor sit amet."}
            ]
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="container-fluid page-container">
                            <HelpButtons />
                            <FAQs questions={this.state.questions} />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
