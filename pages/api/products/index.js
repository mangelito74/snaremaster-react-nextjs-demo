import { products } from "../../../lib/data";

const handler = async (req, res) => {
  const resData = JSON.stringify(products);
  res.end(resData);
};

export default handler;
