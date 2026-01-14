import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return <div className="p-2">Product details-id: {id}</div>;
};

export default ProductDetails;
