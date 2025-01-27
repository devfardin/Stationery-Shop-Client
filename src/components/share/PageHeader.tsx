
import { Link } from 'react-router'
import Container from './Container'
type TPage = {
    page: string,
}
const PageHeader = ({ page }: TPage) => {
    return (
        <div className='bg-bg py-16'>
            <Container>
                <div>
                    <h1 className='text-4xl font-medium text-heading text-center'>{page}</h1>
                    <h1 className='text-xl font-normal text-pera  duration-300 transition-all text-center mt-4'>
                        <Link className='hover:text-primary' to='/'>Home</Link> | <span>{page}</span>
                    </h1>
                </div>
            </Container>
        </div>
    )
}
export default PageHeader