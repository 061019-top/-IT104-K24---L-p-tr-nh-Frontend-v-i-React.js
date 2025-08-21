import { Component } from "react";

type PropsType = {
  name: string;
};

export default class Children_Comp extends Component<PropsType> {
  render() {
    return (
      <div>
        Component con: <p>{this.props.name}</p>
      </div>
    );
  }
}
