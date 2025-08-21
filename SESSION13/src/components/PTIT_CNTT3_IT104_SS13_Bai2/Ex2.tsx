export default function Exercise2() {
  const info = {
    id: 1,
    name: "Chu Đình Minh",
    date: "19/10/2006",
    address: "Hà Nội"
  };

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>ID: {info.id}</p>
      <p>Name: {info.name}</p>
      <p>Date: {info.date}</p>
      <p>Address: {info.address}</p>
    </div>
  );
}
