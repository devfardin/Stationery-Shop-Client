import Container from '../../components/share/Container'
const TopRatedProducts = () => {
    return (
        <div className='mt-20'>
            <Container>
                <div>
                    <div className='flex-1 bg-[url(./assets/images/topratedproducts.png)] bg-cover  bg-no-repeat p-44 rounded-lg flex flex-col h-full justify-center items-center gap-2'>
                        <h1 className='text-3xl font-normal text-white'>Summer Sale</h1>
                        <h1 className='text-[40px] text-center font-bold leading-12 text-white mt-5 w-lg'>Up to 10% off only for
                            all new customers</h1>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default TopRatedProducts
