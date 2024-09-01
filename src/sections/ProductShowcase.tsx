import Image from 'next/image';

import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='section-heading '>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='section-title mt-5'>
            A more effective way to track progress
          </h2>
          <p className='section-description mt-5'>
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        <div className='relative'>
          <Image src={productImage} alt='product image' className='mt-10' />
          <Image src={pyramidImage} alt='pyramid image' className='hidden md:block absolute -right-36 -top-32' height={262} width={262} />
          <Image src={tubeImage} alt='tube image' className='hidden md:block absolute bottom-24 -left-36' height={248} />
        </div>
      </div>
    </section>
  )
};
