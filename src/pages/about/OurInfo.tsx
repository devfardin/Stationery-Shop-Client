import Container from '../../components/share/Container'
import CountUp from 'react-countup'
const OurInfo = () => {
    const counterItems = [
        {
            endNumber: 1000,
            separator: ',',
            suffix: '+',
            text: 'Total Products',
        },
        {
            endNumber: 1500,
            separator: ',',
            suffix: '+',
            text: 'Total Variant',
        },
        {
            endNumber: 500,
            separator: ',',
            suffix: '+',
            text: 'Total User',
        },
        {
            endNumber: 1200,
            separator: ',',
            suffix: '+',
            text: 'Total Sell',
        }
    ]
    return (
        <Container>
            <div className='border-2 border-primary border-dashed px-8 py-10 lg:px-14 lg:py-20 mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    counterItems.map((item, index) => <div key={index} className='flex justify-center flex-col items-center'>
                    <CountUp
                      className='text-4xl font-medium text-heading text-center'
                      end={item?.endNumber}
                      duration={2.75}
                      separator={item?.separator}
                      suffix={item?.suffix}
                    />
                    <h2 className='h-[3px] text-center my-3 flex justify-center bg-primary w-16 border-primary'> </h2>
                    <h5 className='text-lg font-normal text-pera'>{item.text}</h5>
                  </div>)
                }

            </div>
        </Container>
    )
}

export default OurInfo
