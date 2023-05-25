import React, { cloneElement, useEffect, useState } from 'react';

type SliderProps = {
  children: Object;
};

const Slider = (props: SliderProps) => {
  console.log('children', props.children);

  const [sliderState, setSliderState] = useState<string[]>([]);
  const sliderImgArr: any = props.children;

  console.log('속성', sliderImgArr.props.children);

  useEffect(() => {
    setSliderState(sliderImgArr.props.children);
  }, [props]);

  // console.log('인덱스 길이', sliderState?.length);

  const [imgIndexState, setImgIndexState] = useState<number>(0);
  // const [nextMoveState, setNextMoveState] = useState<boolean>(false);

  const handleNextImg = () => {
    if (imgIndexState === sliderState!.length - 1) {
      // console.log('인덱스 체크2');
      setImgIndexState(0);
    } else if (imgIndexState < sliderState!.length) {
      sliderState?.map((child: string | unknown) => {
        const className = sliderState[imgIndexState]
          ? 'h-[33.5rem] w-full slide-transition'
          : 'h-[33.5rem] w-full';
        return cloneElement(child as React.ReactElement, { className });
      });

      setImgIndexState(imgIndexState + 1);

      // console.log('인덱스 체크1');
    }
    // sliderState?.map((child: string | unknown, index) => {
    //   const className =
    //     index === imgIndexState
    //       ? 'h-[33.5rem] w-full slide-transition'
    //       : 'h-[33.5rem] w-full';
    //   return cloneElement(child as React.ReactElement, { className });
    // });
    // setNextMoveState(false);
  };

  const handlePrevImg = () => {
    if (imgIndexState > 0) {
      setImgIndexState(imgIndexState - 1);
    } else {
      setImgIndexState(sliderState!.length - 1);
    }
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            handlePrevImg();
          }}
        >
          왼쪽 화살표
        </button>
      </div>
      <div>{sliderState?.[imgIndexState]}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            handleNextImg();
          }}
        >
          오른쪽 화살표
        </button>
      </div>
    </div>
  );
};

export default Slider;
