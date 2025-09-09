import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface Contact {
  id: string;
  name: string;
  phone: string;
}

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempName, setTempName] = useState("");
  const [tempPhone, setTempPhone] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("contacts");
    if (saved) setContacts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Tên và số điện thoại không được để trống");
      return;
    }
    if (contacts.some(c => c.phone === phone)) {
      setError("Số điện thoại đã tồn tại");
      return;
    }
    setContacts([...contacts, { id: uuidv4(), name, phone }]);
    setName("");
    setPhone("");
    setError("");
  };

  const handleUpdate = (id: string) => {
    if (!tempName || !tempPhone) return;
    if (contacts.some(c => c.phone === tempPhone && c.id !== id)) {
      alert("Số điện thoại đã tồn tại");
      return;
    }
    setContacts(
      contacts.map(c => (c.id === id ? { ...c, name: tempName, phone: tempPhone } : c))
    );
    setEditingId(null);
  };

  const handleDelete = () => {
    if (deleteId) {
      setContacts(contacts.filter(c => c.id !== deleteId));
      setDeleteId(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold bg-green-600 text-white p-3 rounded-lg text-center">
        📇 Quản Lý Liên Hệ
      </h1>

      <form onSubmit={handleAdd} className="flex gap-2 my-4">
        <input
          className="border p-2 flex-1 rounded-lg"
          placeholder="Tên liên hệ"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="border p-2 flex-1 rounded-lg"
          placeholder="Số điện thoại"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Thêm</button>
      </form>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="font-bold mb-2">📋 Danh sách liên hệ</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Tên liên hệ</th>
              <th className="p-2">Số điện thoại</th>
              <th className="p-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id} className="border-t">
                <td className="p-2">
                  {editingId === c.id ? (
                    <input
                      value={tempName}
                      onChange={e => setTempName(e.target.value)}
                      className="border p-1 rounded"
                    />
                  ) : (
                    c.name
                  )}
                </td>
                <td className="p-2">
                  {editingId === c.id ? (
                    <input
                      value={tempPhone}
                      onChange={e => setTempPhone(e.target.value)}
                      className="border p-1 rounded"
                    />
                  ) : (
                    c.phone
                  )}
                </td>
                <td className="p-2 flex gap-2">
                  {editingId === c.id ? (
                    <>
                      <button
                        onClick={() => handleUpdate(c.id)}
                        className="bg-green-500 text-white px-2 rounded"
                      >
                        Lưu
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-400 text-white px-2 rounded"
                      >
                        Hủy
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingId(c.id);
                          setTempName(c.name);
                          setTempPhone(c.phone);
                        }}
                        className="bg-blue-500 text-white px-2 rounded"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => setDeleteId(c.id)}
                        className="bg-red-500 text-white px-2 rounded"
                      >
                        Xóa
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Bạn có chắc chắn muốn xóa?</p>
            <div className="flex gap-2 mt-4 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-4 gap-2">
        <button className="px-3 py-1 border rounded">&lt;</button>
        <button className="px-3 py-1 border rounded bg-green-600 text-white">1</button>
        <button className="px-3 py-1 border rounded">&gt;</button>
      </div>
    </div>
  );
}
