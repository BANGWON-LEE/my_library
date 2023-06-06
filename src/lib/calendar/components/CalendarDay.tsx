import { useEffect, useState } from 'react';

interface CalendarDaydayType {
  allDates: object[];
  currentMonth: string;
}

const CalendarDay = (props: CalendarDaydayType) => {
  const [arrDayState, setArrDayState] = useState<object[][] | string[][]>();
  const toggleDay = (): void => {
    // console.log('이전123', dates);
  };

  const divideDay = (data: any) => {
    const dayArray: object[][] = [];
    const weekArray: any = ['', '', '', '', '', '', ''];

    let i = 0;
    for (let j = 0; j < data.length; j += 1) {
      // console.log('ddd', data[j]);
      if (data[j] !== undefined) {
        const dayType: string = data[j].getDay().toString();
        const dayValue: Date = data[j];

        if (dayType === '0') {
          weekArray[0] = dayValue;
        } else if (dayType === '1') {
          // console.log('1번');
          weekArray[1] = dayValue;
        } else if (dayType === '2') {
          weekArray[2] = dayValue;
        } else if (dayType === '3') {
          weekArray[3] = dayValue;
        } else if (dayType === '4') {
          weekArray[4] = dayValue;
        } else if (dayType === '5') {
          weekArray[5] = dayValue;
        } else if (dayType === '6') {
          weekArray[6] = dayValue;

          dayArray[i] = [...weekArray];
          i += 1;
        }
      }
    }
    setArrDayState(dayArray);
  };

  useEffect(() => {
    if (props.allDates !== undefined) {
      console.log('보기', props.allDates);
      divideDay(props.allDates);
    }
  }, [props.allDates]);

  console.log('currentMonth', props.currentMonth);

  const btnDisabled = 'opacity-25 pointer-events-none';

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
          {el.map((day: string | object) => (
            <div key={Number(day)} className="w-[4rem] py-2">
              <button
                className={`w-[4rem] ${
                  props.currentMonth !==
                    ((day as Date).getMonth() + 1).toString() && btnDisabled
                }`}
                type="button"
                onClick={() => toggleDay()}
                disabled={
                  props.currentMonth !==
                  ((day as Date).getMonth() + 1).toString()
                }
              >
                {(day as Date).getDate()}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;
