import React from 'react'

const ValueGains = ({ data, margin }) => {
  return (
    <div className={margin ? margin : 'mb-[35px]'}>
      <div className='flex justify-between mb-[15px]'>
        <p className='text-color text-[16px] leading-5 font-[500]'>{data.heading.label}</p>
        <p className='text-color text-[20px] leading-5 font-[700]'>{data.heading.value}</p>
      </div>
      <div className='flex flex-col gap-[24px] dark:bg-gray bg-[#FAFAFA]  rounded-2xl p-[16px]'>
        <div className='flex flex-wrap justify-between'>
          {data.gains.map((item, index) => (
            <div key={index} className={`flex flex-col justify-start gap-[4px] basis-1/2 even:items-end odd:items-start last:mb-0 ${index === data.gains.length - 2 ? '' : 'mb-[24px]'}`}>
              <div>
                <p className={parseInt(item.value) >= 0 ? 'font-green' : 'font-red'}>{item.value}</p>
                {item.percent &&
                  <p className={parseInt(item.percent) >= 0 ? 'text-green' : 'flex text-red justify-end'}> ({item.percent})</p>
                }
              </div>
              <p className='text-secondary text-sm font-normal leading-5'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValueGains