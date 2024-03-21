import React, { Component } from 'react';
import './App.css';
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVBJUIwJTgwJUVDJTlDJTg0JUVCJUIwJTk0JUVDJTlDJTg0JUVCJUIzJUI0fGVufDB8fDB8fHww"
  },
  scissors: {
    name: "Scissors",
    img: "https://images.unsplash.com/photo-1614032686099-e648d6dea9b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVBJUIwJTgwJUVDJTlDJTg0JUVCJUIwJTk0JUVDJTlDJTg0JUVCJUIzJUI0fGVufDB8fDB8fHww"
  },
  paper: {
    name: "Paper",
    img: "https://images.unsplash.com/photo-1614032686158-b880f7e82c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVBJUIwJTgwJUVDJTlDJTg0JUVCJUIwJTk0JUVDJTlDJTg0JUVCJUIzJUI0fGVufDB8fDB8fHww"
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: ""
    };
  }

  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });
    let computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });
    this.setState({ result: this.judgement(choice[userChoice], computerChoice) });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    const { userSelect, computerSelect, result } = this.state;

    return (
      <div>
        <div className="main">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}

