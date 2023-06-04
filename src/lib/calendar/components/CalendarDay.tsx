import { useEffect, useState } from 'react';

interface CalendarDayType {
  allDates: object[];
}

const CalendarDay = (props: CalendarDayType) => {
  const [arrDayState, setArrDayState] = useState<object[][] | string[]>();
  const toggleDay = (): void => {
    // console.log('이전123', dates);
  };

  // j = i * j
  // 0 1 2 3 4 5 6
  // 7 8 9 10 11 12 13

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
    <div>
      {arrDayState?.slice(0, 6).map((el) => (
        <div key={el.toString()}>
          <button type="button" onClick={() => toggleDay()}>
            {el.toString().replaceAll(',', '')}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;
