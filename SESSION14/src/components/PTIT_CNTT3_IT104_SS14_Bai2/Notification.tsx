import { Component } from "react";

class Notification extends Component {
  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h3>Notification Component</h3>
      </div>
    );
  }
}

export default Notification;
