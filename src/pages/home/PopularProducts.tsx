import Container from '../../components/share/Container'
import SectionHeading from '../../components/share/SectionHeading'
import ProductCard from '../../components/share/ProductCard'
import LinkButton from '../../components/share/LinkButton'
import { useGetProductsQuery } from '../../redux/features/product/productApi'

const PopularProducts = () => {
const { data: products, isLoading: loading } = useGetProductsQuery(undefined);

  return (
    <div className='mt-20'>
      <Container>
        <div>
            <SectionHeading title='Customer Loves' subTitle='POPULAR PRODUCTS'/>
            <div>
                <ProductCard startQuery={0} endQuery={7} isLoading={loading}
                products={products?.data}/>
            </div>
            <div className='mt-5 flex justify-center'>
            <LinkButton link='/shop' label='View All'/>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default PopularProducts
