// Dữ liệu mẫu
const response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com"
    }
  }
};

// Hàm trích xuất thông tin
function extractData({ data }) {
  const { title, author } = data;
  const { name: authorName, email: authorEmail } = author;

  console.log("Title :", title);
  console.log("Author :", author);
  console.log("AuthorName:", authorName);
  console.log("AuthorEmail:", authorEmail);
}

// Gọi hàm
extractData(response);
