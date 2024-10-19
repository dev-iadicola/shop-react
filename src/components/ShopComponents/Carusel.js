
const Carusel = ({ id, title, price, description, category, image, next, prev}) => {
    return (
        <div className="carusle-group my-5 col-12">
            <h2>All Products</h2>
             
                  <div className="d-flex flex-columns mx-auto justify-content-center
                   py-5 holiday-container  w-100 " style={{background:'white'}}>
                   
                    <img src={image} alt={title} className="object-fit-lg-contain object-fit-md-contain    " width={300} height={300} />

                  
  
                  </div>
                  <div className=" d-flex justify-content-between my-2 mt-5">
                      <button className="btn" onClick={prev}>Prev</button>
                      <button className="btn" onClick={next}>Next</button>
                    </div>
                   <div className="holiday-info">
                   <h3>{title}</h3>
                    <p>{description}</p>
                    <small>{category}</small>
                    <h5 className="holiday-cost"> Price {(price).toFixed(2)}</h5>
  
                    
                   </div>
             
        </div>
    );
  };

  export default Carusel;