import React, { Component } from "react";
type JobList = {
    id: number;
    name: string;
    assign: string;
    status: boolean;
    create_at: string;
};
type List={
   list:JobList[];
}
export default class TodoList extends Component<object, List> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: "Nguyen van A",
          assign: "Thiet ke giao dien Header",
           status: true,
          create_at:" 20/08/2025",
        },
        {
          id: 2,
          name: "Nguyen Van B",
          assign: "Thiet ke giao dien Footer",
          status: false,
       create_at:" 20/08/2025",
        },
      ],
    };
  }
  render() {
    return (
      <table width={"100%"}>
        <tr>
          <th>STT</th>
          <th>Ten cong viec</th>
          <th>Nguoi thuc hien</th>
          <th>Trang thai</th>
          <th>Thoi gian tao</th>
          <th>Chuc nang</th>
        </tr>
        {this.state.list.map((item, index) => (
          <tr key={index} style={{textAlign:"center",}}>
            <td>{item.id}</td>
            <td>{item.assign}</td>
            <td>{item.name}</td>
            <td style={{display:"flex",justifyContent:'center'}}>
               {item.status == true ? (
                <div style={{
                      width: "100px",
                    height: "20px",
                    padding:"10px",
                    borderRadius:"4px",
                    border:"1px solid Green",
                    backgroundColor: "#CCC",
                    color: "Green",
                  }}
                >
                   Hoan Thanh
                </div>
              ) : (
                <div
                 style={{
                    width: "150px",
                     height: "20px",
                     padding:"10px",
                    border:"1px solid Red",
                    borderRadius:"4px",
                    backgroundColor: "#CCC",
                    color: "red",
                  }}
                >
                   Khong hoan thanh
                </div>
              )}
            </td>
            <td>
             {item.create_at}
            </td>
            <td style={{
                display:"flex",
                gap:"20px",
                justifyContent:'center'
            }}>
              <button
                style={{
                  width: "50px",
                  height: "30px",
                  borderRadius:"4px",
                  border: "1px solid green",
                  color:"green"
                }}
              >
                Xoa
              </button>
              <button
                style={{
                  width: "50px",
                  height: "30px",
                  borderRadius:"4px",
                  border: "1px solid red",
                  color:"red"
                }}
              >
                Sua
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}