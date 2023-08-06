import { products } from "../../../lib/data";

const handler = async (req, res) => {
  const { productId } = req.query;
  if (productId) {
    const selectedProduct = products.find((product) => product.id === productId);
    if (selectedProduct) {
      const resData = JSON.stringify(selectedProduct);
      res.end(resData);
    }
  }
};

export default handler;
