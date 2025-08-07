type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};

function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price - product.discount;
  }
  return product.price;
}

function printProductInfo(product: Product): void {
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
  if (product.discount) {
    console.log(`Giá sau giảm: ${getFinalPrice(product).toLocaleString()} VND`);
  }
  console.log(`Danh mục: ${product.category.name}`);
}

const listProduct: Product[] = [
  {
    id: "01",
    name: "Áo sơ mi",
    price: 300000,
    discount: 60000,
    category: {
      id: "1",
      name: "Thời trang nam"
    }
  },
  {
    id: "02",
    name: "Giày thể thao",
    price: 1200000,
    category: {
      id: "2",
      name: "Giày dép"
    }
  },
  {
    id: "03",
    name: "Balo học sinh",
    price: 450000,
    discount: 50000,
    category: {
      id: "3",
      name: "Phụ kiện"
    }
  }
];

listProduct.forEach(printProductInfo);
