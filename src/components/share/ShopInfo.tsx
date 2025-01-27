import Container from './Container'
import { BsGift, BsTruck } from 'react-icons/bs'
import { LiaRedoAltSolid } from 'react-icons/lia'
import { RxLockClosed } from 'react-icons/rx'

const ShopInfo = () => {
    const shopInfo =[
        {
            icon: BsTruck,
            title: 'Free Shipping',
            subtitle: 'Order Over $90'
        },
        {
            icon: LiaRedoAltSolid,
            title: 'Easy Return',
            subtitle: 'Within 15 Days'
        },
        {
            icon: RxLockClosed,
            title: 'Secure payment',
            subtitle: 'Online Shopping'
        },
        {
            icon: BsGift,
            title: 'Best Offer',
            subtitle: 'Guaranteed'
        },
    ]
  return (
    <Container>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-7 mt-16'>
    {
         shopInfo.map((info, index)=> <div key={index} className='border border-[#e9ecef] flex items-center justify-center gap-4 px-5 py-10'>
             <info.icon className='text-4xl text-primary'/>
             <div>
             <h1 className='text-2xl font-normal text-heading'>{info.title}</h1>
             <p className='text-base font-normal text-[#888888]'>{info.subtitle}</p>
             </div>
         </div>)
     }
    </div>
 </Container>
  )
}

export default ShopInfo
