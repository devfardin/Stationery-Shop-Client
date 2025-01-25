import { useEffect, useState } from 'react'
import Container from '../../components/share/Container'
import SectionHeading from '../../components/share/SectionHeading'
import ProductCard from '../../components/share/ProductCard'

const PopularProducts = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProducts] = useState([])
        useEffect(() => {
            setLoading(true);
            fetch("./products.json")
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                    setLoading(false);
                });
        }, []);
        console.log(product);
        
  return (
    <div className='mt-20'>
      <Container>
        <div>
            <SectionHeading title='Customer Loves' subTitle='POPULAR PRODUCTS'/>
            <div>
                <ProductCard startQuery={0} endQuery={7} isLoading={loading} products={product}/>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default PopularProducts
