import { useEffect, useState } from "react";
import useStorage from "..//CostumHook/useStorage";
import AlertComponent from "./Alert";
import { FaBuyNLarge, FaHeart } from "react-icons/fa";



const Article = ({ title, price, description, category, image }) => {
  const [alertInfo, setAlertInfo] = useState({ show: false, message: '', type: '' });

  const handleBuy = () => {
    setAlertInfo({ show: true, message: 'Product purchase made!', type: 'success' });
  };


  const { addItem: addToCard } = useStorage('cart');
  const { addItem: addWishList } = useStorage('wishlist');

  const handleAddToCart = () => {

    const result = addToCard({ title, price, category, image });

    if (result.success) {
    
      setAlertInfo({ show: true, message: 'Product added to cart!', type: 'info' });
    } else {
      setAlertInfo({ show: true, message: 'Product is already in the cart!', type: 'warning' });
    }
  };



  const handleWishList = () => {

    const result = addWishList({ title, price, category, image });

    if (result.success) {
      setAlertInfo({ show: true, message: 'Product added to wish list!', type: 'success' });
    } else {
      setAlertInfo({ show: true, message: 'Product is already in the wish list!', type: 'warning' });
    }
  };





  useEffect(() => {
    if (alertInfo.show) {
      const timer = setTimeout(() => {
        setAlertInfo({ ...alertInfo, show: false });
      }, 4000);

      // debugged with this
      return () => clearTimeout(timer);
    }
  }, [alertInfo.show]);

  const closeAlert = () => {
    setAlertInfo({ ...alertInfo, show: false });
  };

  const [fullString, setFullString] = useState(true);

  return (

    <article className="article d-flex flex-column 
    flex-md-clomun justify-content-center p-0 m-0 ">
     <div className="bg-light w-100">
     <img
          src={image}
          alt={title}
          className="img-fluid img-card-top  object-fit-content"
          style={{ maxHeight: '300px' }}
        />
     </div>
      <div className="article-content text-center text-md-start p-1" style={{ width: '50' }}>
        <h5 className="">{title}</h5>
        
        <small className="text-secondary float-start pe-5">Category: {category}</small>
        
        
        
        <div className="pt-4 fs-5" onClick={() => setFullString(!fullString)}>
          {fullString ? description.substring(0, 20) + '...' : description}
        </div>

        <div className="fs-3 my-2 fw-bold">
          <span className="text-success">€</span> {price.toFixed(2)}
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between gap-2 mb-3">
          <button
            className="btn btn-success fs-6"
            style={{ backgroundColor: 'green', color: 'white' }}
            onClick={handleBuy}
          >
            Buy Now
            
          </button>

          <button
            className="btn btn-info fs-6"
            style={{ backgroundColor: 'dodgerblue', color: 'white' }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <button className="btn btn-danger fs-6" onClick={handleWishList}>
          

            <FaHeart/>
          </button>
        </div>
      </div>

      

      {alertInfo.show && (
        <AlertComponent
          type={alertInfo.type}
          message={alertInfo.message}
          onClose={closeAlert}
        />
      )}
    </article>
  );
};

export default Article;
