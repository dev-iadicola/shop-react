

import { ProductsAPI } from '../../data/apiProducts';
import useFetch from '../useFetch';
import ErrorPage from '../route/screen/ErrorPage'
import Header from '../ShopComponents/Header';
import Article from './Article';
import LoadingPage from '../LoadingPage';
import { useGlobalContext } from '../context/context';






function ShopComponent() {
  //const { data, isLoading } = useFetch(ProductsAPI);

  const{products, isLoading, isError} = useGlobalContext()

//  console.log(isError)
  
  return (
    <section className="container-lg ">
      <div className=''>
       

        <Header url={ProductsAPI}/>
        <section className="article-section">
       


        {isError ? (
          < ErrorPage /> 
        ) : isLoading ? (
          <LoadingPage />
        ) : (
          products.map(product => <Article key={product.id} {...product} />)
        )}
        </section>
      </div>

    </section>
  );
}


export default ShopComponent;
