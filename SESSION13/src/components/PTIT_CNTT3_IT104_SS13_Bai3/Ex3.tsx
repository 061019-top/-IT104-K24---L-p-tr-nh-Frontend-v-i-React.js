import { Component } from 'react'
type User = {
    id: number
    name: string
    age: number
}
type InitialState = {
    users: User[]
}
export default class Exercise3 extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Minh Thu",
                    age: 66
                },
                {
                    id: 2,
                    name: "Minh Thu",
                    age: 77
                },
                {
                    id: 3,
                    name: "Minh Thu",
                    age: 88
                }
            ]
        }
    }
  render() {
    return (
      <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}
