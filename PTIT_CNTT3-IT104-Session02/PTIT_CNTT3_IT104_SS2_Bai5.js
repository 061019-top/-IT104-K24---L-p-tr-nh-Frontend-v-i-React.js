let phoneBooks = [];

function addContact(name, phone, email) {
  phoneBooks.push({ name, phone, email });
}

function displayContact() {
  phoneBooks.forEach((c, i) =>
    console.log(`${i + 1}. Tên: ${c.name}, SĐT: ${c.phone}, Email: ${c.email}`)
  );
}

addContact("Nguyễn Văn A", "0901234567", "a@gmail.com");
addContact("Trần Thị B", "0912345678", "b@gmail.com");
displayContact();
