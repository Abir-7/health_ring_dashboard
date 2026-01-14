import { Link } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: "1", name: "MacBook Pro", price: 2500 },
  { id: "2", name: "iPhone 15", price: 1200 },
];

const Product = () => {
  return (
    <div className="p-6">
      <ul className="space-y-3">
        {products.map((product) => (
          <li key={product.id} className="border rounded-md p-4 hover:shadow">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>

              <Link
                to={`/products/${product.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
