import { Component } from "react";

interface SloganState {
  text: string;
}

class Slogan extends Component<{}, SloganState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      text: "Học code để đi làm",
    };
  }

  changeState = () => {
    this.setState({
      text: "Học code sẽ thành công. Cố lên!!!",
    });
  };

  shouldComponentUpdate(nextProps: {}, nextState: SloganState) {
    console.log("State mới:", nextState.text);
    return false;
  }

  render() {
    console.log("Render chạy");
    return (
      <div>
        <h2>Slogan: "{this.state.text}"</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Slogan;
