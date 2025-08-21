import { Component } from "react";
import Children_Comp from "./Chil";

type PropsType = {
  name: string;
};

export default class Parent_Comp extends Component<{}, PropsType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Chu Đình Minh"
    };
  }

  render() {
    return (
      <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
        <h2 style={{ color: "darkblue" }}>
          Component cha: <span style={{ color: "crimson" }}>{this.state.name}</span>
        </h2>

        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
