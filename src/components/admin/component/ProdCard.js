import { Link } from "react-router-dom";
import { Button } from "antd";
import './ProdCard.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
const ProdCard = ({ product }) => {
  return (
    <div className="prodDiv">
      <Link className="prodCard" to={`/products/getProductDetails/${product._id}`} style={{ textDecoration: 'none' }}>
        <img className="prodPic" src={product.images[0].url} alt={product.name} />
        <p className="prodName">{product.name}</p>
        <span className="prodPrice">{`₹${product.price}`}</span>
        <span className="prodPrice">Stock : {product.stock}</span>
      </Link>
      <Button className="btn">
        <Link to={`/admin/products/editProduct?productId=${product._id}`} />
        <BorderColorIcon />
      </Button>
    </div>
  )
}
export default ProdCard;