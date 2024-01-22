import React from 'react'

const ShareInfo = ({ data }) => {
  return (
    <div className='mb-[35px] mt-[8px]'>
      <div className='flex flex-col gap-[24px] dark:bg-gray bg-[#FAFAFA]  rounded-2xl p-[16px]'>
        <div className='flex flex-wrap justify-between'>
          {data.map((item, index) => (
            <div key={index} className={`flex flex-col justify-start gap-[4px] basis-1/2 even:items-end odd:items-start last:mb-0 ${index === data.length - 2 ? '' : 'mb-[24px]'}`}>
              <p className='text-color'>{item.value}</p>
              <p className='text-secondary text-sm font-normal leading-5'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShareInfo