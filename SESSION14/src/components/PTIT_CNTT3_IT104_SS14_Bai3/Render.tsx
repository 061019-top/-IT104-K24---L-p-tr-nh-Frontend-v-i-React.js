import { Component } from "react";

interface CompanyState {
  name: string;
}

class Company extends Component<{}, CompanyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Rikkei Academy",
    };
  }

  changeState = () => {
    this.setState({
      name: "RikkeiSoft",
    });
  };

  render() {
    return (
      <div>
        <h2>Company: {this.state.name}</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Company;
