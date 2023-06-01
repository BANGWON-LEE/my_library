import { useEffect, useState } from 'react';

interface CalendarDayType {
  allDates: object[];
}

const CalendarDay = (props: CalendarDayType) => {
  const [arrDayState, setArrDayState] = useState<object[]>();
  const toggleDay = (): void => {
    // console.log('이전123', dates);
  };

  // j = i * j
  // 0 1 2 3 4 5 6
  // 7 8 9 10 11 12 13

  const divideDay = (data: any) => {
    console.log('data', data);
    console.log('lng', data.length / 7);
    // const dayArray: string[][] = [];
    const dayArray: any = [];
    const weekArray: any = ['', '', '', '', '', '', ''];
    console.log('weeklng', data?.length);
    let i = 0;
    for (let j = 1; j <= data?.length; j += 1) {
      const [type, value] = data[j - 1];
      console.log('jj', j);
      if (type === '0') {
        // console.log('0번 타입', typeof data[j][1]);
        // console.log('0번', data[j][1]);
        weekArray[0] = value;
        console.log('0번라인', weekArray[0], value);
      } else if (type === '1') {
        // console.log('1번');
        weekArray[1] = value;
        console.log('1번라인', weekArray[1], value);
      } else if (type === '2') {
        weekArray[2] = value;
        console.log('2번라인', value);
      } else if (type === '3') {
        weekArray[3] = value;
        console.log('3번라인', value);
      } else if (type === '4') {
        weekArray[4] = value;
        console.log('4번라인', value);
      } else if (type === '5') {
        weekArray[5] = value;
        console.log('5번라인', value);
      } else if (type === '6') {
        weekArray[6] = value;
        console.log('day', weekArray);
        dayArray[i] = [...weekArray];
        i += 1;
        console.log('6번라인', value);
      }
    }
    console.log('dayArray', dayArray);
  };

  useEffect(() => {
    if (props.allDates !== undefined) {
      divideDay(props.allDates);
    }
  }, [props.allDates]);

  console.log('allD2', arrDayState);

  return (
    <div>
      {arrDayState?.map((el) => (
        <div key={el}>
          <button type="button" onClick={() => toggleDay()}>
            {el}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;
