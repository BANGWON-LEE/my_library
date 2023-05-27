import React, { cloneElement, useEffect, useState } from 'react';

type SliderProps = {
  children: Object;
};

const Slider = (props: SliderProps) => {
  const sliderImgArr: any = props.children;

  const [sliderState, setSliderState] =
    useState<React.ReactNode[]>(sliderImgArr);

  // useEffect(() => {
  //   setSliderState(sliderImgArr);
  // }, [props]);

  console.log('sliderState', typeof sliderState);

  const [imgIndexState, setImgIndexState] = useState<number>(0);
  const [imgSignalState, setImgSignalState] = useState<Boolean>(false);

  const handleNextImg = () => {
    if (imgIndexState === sliderState!.length - 1) {
      setImgIndexState(0);
    } else if (imgIndexState < sliderState!.length) {
      setImgIndexState(imgIndexState + 1);
      setImgSignalState(true);
    }
  };

  const handlePrevImg = () => {
    if (imgIndexState > 0) {
      setImgIndexState(imgIndexState - 1);
    } else {
      setImgIndexState(sliderState!.length - 1);
    }
    setImgSignalState(true);
  };

  useEffect(() => {
    if (imgIndexState !== null) {
      setSliderState(
        sliderState?.map((child: string | unknown, index: number) => {
          let className: string = '';

          if (index !== imgIndexState - 1 && imgIndexState !== 0) {
            className = 'h-[33.5rem] w-full slider slide prev';
          } else if (index === imgIndexState - 1 && imgIndexState === 0) {
            className = 'h-[33.5rem] w-full slider slide next';
          } else if (index !== imgIndexState + 1 && imgIndexState !== 0) {
            className = 'h-[33.5rem] w-full slider slide next';
          } else if (index === imgIndexState + 1 && imgIndexState === 0) {
            className = 'h-[33.5rem] w-full slider slide prev';
          } else {
            className = 'h-[33.5rem] w-full slider slide next';
          }

          if (index === imgIndexState) {
            className = 'h-[33.5rem] w-full slider slide active';
          }
          return cloneElement(child as React.ReactElement, {
            className,
            // key: index,
          });
        })
      );
    }
  }, [imgIndexState]);

  return (
    <div className="text-[#FFFFFF]">
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
      <div className="slider slide">
        {imgSignalState === true ? sliderState : sliderState[0]}
      </div>
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
