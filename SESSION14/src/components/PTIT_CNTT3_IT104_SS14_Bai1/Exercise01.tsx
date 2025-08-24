import { Component } from "react";

interface Exercise01State {
  userName: string;
}

class Exercise01 extends Component<{}, Exercise01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: "Chu Đình Minh",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps: {}, prevState: Exercise01State) {
    if (prevState.userName !== this.state.userName) {
      console.log("componentDidUpdate");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>Xin chào, {this.state.userName}!</h2>
      </div>
    );
  }
}

export default Exercise01;
