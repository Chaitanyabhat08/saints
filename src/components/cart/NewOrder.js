import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import './NewOrder.css'
import { useEffect } from "react";
const NewOrder = (data) =>{
  console.log(data); 
  const navigateTo = useNavigate();
  const viewproductHandler = () => {
    navigateTo('/products/getAllProducts');
  }
  const viewOrderDetails = () => {
    navigateTo('/order/viewOrderDetails');
  }
  
  useEffect(() => {
    
  },[])
  return (
    <div className="mainDiv">
      <div class="card1">
        <div style={{ "border-radius":"200px","height":"200px", "width":"200px", "background": "#F8FAF5", "margin":"0 auto"}}>
          <i class="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
        <div className="buttonSet">
          <button onClick={viewproductHandler}>View Products</button>
          <button onClick={viewOrderDetails}>Order Details</button>
          <button>Invoice</button>
        </div>
      </div>
    </div>
  )
}

export default NewOrder;