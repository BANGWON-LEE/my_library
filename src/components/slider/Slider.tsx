import Image from 'next/image';

import SliderLib from '@/lib/slider/SliderLib';

import slide1 from '../../asset/brand_slider_img.jpeg';
import slide2 from '../../asset/brand_slider_img2.jpeg';
import slide3 from '../../asset/brand_slider_img3.jpeg';

const Slide = () => {
  return (
    <SliderLib>
      <div className="slider slide active h-[33.5rem] w-full">
        <Image src={slide1} alt="이미지1" className="h-full" />
      </div>
      <div className="slider slide prev h-[33.5rem] w-full">
        <Image src={slide2} alt="이미지2" className="h-full " />
      </div>
      <div className="slider slide next h-[33.5rem] w-full">
        <Image src={slide3} alt="이미지3" className="h-full " />
      </div>
    </SliderLib>
  );
};

export default Slide;
