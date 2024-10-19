

import { ProductsAPI } from '../../data/apiProducts';
import useFetch from '../useFetch';
import Header from '../ShopComponents/Header';
import Article from './Article';
import LoadingPage from '../LoadingPage';





function ShopComponent() {

  const { data, isLoading } = useFetch(ProductsAPI);


  return (
    <section className="container-lg ">
      <div className=''>
       

        <Header url={ProductsAPI}/>
        <section className="article-section">
       


          {isLoading ? (
            <LoadingPage/>
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


export default ShopComponent;
