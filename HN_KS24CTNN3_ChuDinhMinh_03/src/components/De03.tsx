import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  marked: boolean;
};

function De003() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) {
      try {
        const parsed = JSON.parse(data) as Product[];
        setProducts(parsed);
      } catch (err) {
        console.error("Lỗi parse localStorage products:", err);
        setProducts([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (name.trim() === "" || price.trim() === "") {
      alert("Vui lòng nhập tên và giá.");
      return;
    }
    const numPrice = Number(price);
    if (Number.isNaN(numPrice)) {
      alert("Giá không hợp lệ.");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: name.trim(),
      price: numPrice,
      inStock,
      marked: false,
    };

    setProducts((prev) => [...prev, newProduct]);
    setName("");
    setPrice("");
    setInStock(true);
  };

  const toggleMark = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, marked: !p.marked } : p))
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-4xl justify-center mx-auto p-4">
      <div className="bg-blue-600 text-white py-6 flex justify-center shadow ">
        <div className="flex items-center gap-2">
          <span className="text-3xl"></span>
          <h1 className="text-2xl font-bold">Quản lý Sản phẩm</h1>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="w-full max-w-4xl space-y-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2 justify-center">
              <span className="text-blue-600">+</span> Thêm sản phẩm mới
            </h2>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-3 py-2 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="Giá (đ)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border px-3 py-2 rounded-lg w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={() => setInStock(!inStock)}
                  className="w-4 h-4"
                />
                Còn hàng
              </label>
              <button
                onClick={addProduct}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Thêm
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-4 border-b pb-2 justify-center flex items-center gap-2">
              Danh sách sản phẩm
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-sm">
                  <th className="p-3">Tên sản phẩm</th>
                  <th className="p-3">Giá</th>
                  <th className="p-3">Trạng thái</th>
                  <th className="p-3">Hành động</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center p-6 text-gray-500">
                      Chưa có sản phẩm nào
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr
                      key={p.id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td
                        className={`p-3 ${
                          p.marked
                            ? "line-through text-gray-400"
                            : "text-gray-800"
                        }`}
                      >
                        {p.name}
                      </td>
                      <td className="p-3 text-green-600 font-semibold">
                        {p.price.toLocaleString("vi-VN")} đ
                      </td>
                      <td className="p-3">
                        {p.inStock ? (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            Còn hàng
                          </span>
                        ) : (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                            Hết hàng
                          </span>
                        )}
                      </td>
                      <td className="p-3 flex gap-2">
                        <button
                          onClick={() => toggleMark(p.id)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1 rounded-lg text-sm"
                        >
                          Đánh dấu
                        </button>
                        <button
                          onClick={() => deleteProduct(p.id)}
                          className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg text-sm"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-3">
              Tổng: {products.length} sản phẩm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default De003;
