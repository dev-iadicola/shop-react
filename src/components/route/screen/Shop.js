import { ProductsAPI } from '../../../data/apiProducts'
import useFetch from '../../useFetch';
import Article from '../../Article';
import Header from '../../Header';





function Shop() {

  const { data, isLoading } = useFetch(ProductsAPI);


  return (
    <section className="container-lg ">
      <div className=''>
       

        <Header url={ProductsAPI}/>
        <section className="article-section">
       


          {isLoading ? (
            <h3>Loading...</h3>
          ) :
            (
              data.map(product => <Article key={product.id} {...product} />)
            )
          }
        </section>
      </div>

    </section>
  );
}


export default Shop;
