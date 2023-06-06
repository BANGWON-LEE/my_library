import { useEffect, useState } from 'react';

interface CalendarDayType {
  allDates: object[];
}

const CalendarDay = (props: CalendarDayType) => {
  const [arrDayState, setArrDayState] = useState<object[][] | string[][]>();
  const toggleDay = (): void => {
    // console.log('이전123', dates);
  };

  const divideDay = (data: any) => {
    const dayArray: object[][] = [];
    const weekArray: any = ['', '', '', '', '', '', ''];

    let i = 0;
    for (let j = 0; j < data?.length; j += 1) {
      const [type, value] = data[j];
      if (type === '0') {
        weekArray[0] = value;
      } else if (type === '1') {
        // console.log('1번');
        weekArray[1] = value;
      } else if (type === '2') {
        weekArray[2] = value;
      } else if (type === '3') {
        weekArray[3] = value;
      } else if (type === '4') {
        weekArray[4] = value;
      } else if (type === '5') {
        weekArray[5] = value;
      } else if (type === '6') {
        weekArray[6] = value;

        dayArray[i] = [...weekArray];
        i += 1;
      }
    }
    setArrDayState(dayArray);
  };

  useEffect(() => {
    if (props.allDates !== undefined) {
      divideDay(props.allDates);
    }
  }, [props.allDates]);

  // 주간의 날짜에 따라 보여주는 날짜 기간 수정

  return (
    <div className="mx-auto my-6 w-fit ">
      <div className="flex w-full justify-around">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>
      {arrDayState?.slice(0, 6).map((el) => (
        <div className="flex w-full justify-around" key={Number(el[0])}>
          {el.map((day) => (
            <div key={Number(day)} className="w-[4rem] py-2">
              <button
                className="w-[4rem]"
                type="button"
                onClick={() => toggleDay()}
              >
                {day.toString().replaceAll(',', '')}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;
