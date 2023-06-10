import React,{useState} from 'react';
import './CreateNewProd.css';
import axios from 'axios';
import { Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

const CreateNewProd = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [showAlert, setShowAlert] = useState();
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };
  const navigateTo = useNavigate();
  const createNewProduct = async () => {
    const payload = {
      name: productName,
      description,
      price,
      stock,
      category: selectedCategory,
      gender: selectedGender,
      images: selectedImages,
    }
    try {
      const { data } = await axios.post('http://localhost:3000/api/v1/admin/products/createNewProduct',payload);
      if (data.success) {
        setShowAlert(true);
        navigateTo('/admin/products');
      }
    } catch (error) {
      console.error(error);
      setShowAlert(false); 
    }
  }
  return (
    <div className="CreateprodDiv" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {showAlert && (
        <Alert
          message={showAlert ? "Product Created" : "Error Creating Product"}
          description={showAlert ? "New Product created successfully" : "Error occurred while creating the product"}
          type={showAlert ? "success" : "error"}
          showIcon
          closable
        />
      )}
    <div id="createProdMain">
        <form id="createProdForm" onSubmit={createNewProduct} encType="multipart/form-data">
        <div className="form-group">
          <h6 htmlFor="productname">Name of the Product</h6>
          <input
            value={productName}
            type="text"
            className="form-control"
            id="productname"
            aria-describedby="Product Name"
              placeholder="Enter Product Name"
              required
            onChange={(e)=>setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h6 htmlFor="Decription">Description</h6>
          <textarea
            value={description}
            type="text"
            className="form-control"
            id="Description"
              placeholder="Description"
              required
            onChange={(e) => setDescription(e.target.value)}  
          />
        </div>
        <div className="form-group">
          <h6 htmlFor="Price">Price ₹</h6>
          <input
             value={price} 
            type="number"
            className="form-control"
            id="Price"
              placeholder="Price"
              required
            onChange={(e)=> setPrice((e.target.value))}  
          />
        </div>
        <div className="form-group">
          <h6 htmlFor="Stock">Stock</h6>
          <input
            value={stock}
            type="number"
            className="form-control"
            id="Stock"
            placeholder="Stock"
            required
            onChange={(e)=> setStock(e.target.value)}
          />
        </div>
          <div className="form-group">
            <h6 htmlFor="Category">Category</h6>
            <select className="form-control" id="Category" onChange={(event)=> setSelectedCategory(event.target.value)} required>
              <option value="">Select Category</option>
              <option value="Tshirt">Tshirt</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Sweatshirts">Sweatshirts</option>
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
              <option value="Kurtis">Kurtis</option>
              <option value="SweatPants">SweatPants</option>
            </select>
          </div>
          <div className="form-group">
            <h6 htmlFor="Gender">Gender</h6>
            <select className="form-control" id="Gender" onChange={(e) => setSelectedGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <h6 htmlFor="Images">Images</h6>
            <input
              required
              type="file"
              className="form-control-file"
              id="Images"
              multiple
              onChange={handleFileChange}
            />
          </div>
          <div className="image-preview">
            {selectedImages.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`Preview ${index}`} className="preview-image" />
            ))}
          </div>
          <button type="submit" style={{ backgroundColor: "gray", color: "white" }} className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
    </div>
  );
};

export default CreateNewProd;
