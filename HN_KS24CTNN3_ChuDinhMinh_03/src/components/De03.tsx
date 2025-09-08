import React from 'react'
type Product= {
    id : number;
    

}
export default function De03() {
  return (
    <div>
    <div className='quanLy'>
      <h1>📑</h1>
      <h1>Quản lý sản phẩm </h1>
    </div>
    <div className='themSanPham'>
        <h1>✌️</h1>
        <h1>Thêm sản phẩm mới</h1>
        <input type="text"  placeholder='Tên sản phẩm'/>
        <input type="text" placeholder='Giá(đ)'/>
        <button>Còn hàng</button>
        <button>Thêm</button>
    </div>
    <div className='hienThi'>
        <h1>📑</h1>
        <h1>Danh sách sản phẩm </h1>
        <table>
            <td>Tên sản phẩm </td>
            <td>Giá</td>
            <td>Trạng thái</td>
            <td>Hành động</td>
        
        </table>
    </div>
    </div>
  )
}
