import React, { ComponentType } from 'react'
type TSIngleInfo = {
    Icon: ComponentType<{ className?: string }>,
    title: string,
    subTitle: string,
}
const SingleUserInfo: React.FC<TSIngleInfo> = ({Icon, title, subTitle}) => {
  return (
    <div className='inline-block'>
        <div className='flex flex-col gap-0 justify-center  border border-primary rounded-sm relative p-4'>
            <Icon className='text-[40px] text-primary absolute -top-5 left-3 p-1.5 bg-white'/>
            <h1 className='text-lg font-medium text-heading mt-2'>{title}</h1>
            <h2 className='text-base font-normal text-pera'>{subTitle}</h2>
        </div>

    </div>
  )
}

export default SingleUserInfo