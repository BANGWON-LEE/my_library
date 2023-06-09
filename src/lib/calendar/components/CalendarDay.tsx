import { useEffect, useState } from 'react';

interface CalendarDayType {
  allDates: object[];
  currentMonth: string;
}
interface DayInfoType {
  start: number;
  end: number;
}
const CalendarDay = (props: CalendarDayType) => {
  const initialDayInfo: DayInfoType = {
    start: 0,
    end: 0,
  };
  const [dateRange, setDateRange] = useState<DayInfoType>(initialDayInfo);

  const toggleDay = (day: object | string): void => {
    console.log('마이데이', day);
    const dayInfo: number = new Date(day.toString()).getTime();

    setDateRange((prevDateRange) => {
      if (prevDateRange.start === 0) {
        return {
          ...prevDateRange,
          start: dayInfo,
        };
      }
      if (prevDateRange.start !== 0 && prevDateRange.start < dayInfo) {
        return {
          ...prevDateRange,
          end: dayInfo,
        };
      }
      return initialDayInfo;
    });
  };
  console.log('마이데이3', dateRange);

  const [arrDayState, setArrDayState] = useState<object[][] | string[][]>();

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
                }
                ${
                  dateRange?.end === new Date(day.toString()).getTime() &&
                  ' rounded-full bg-pink-600  text-[#FFFFFF]'
                }
                ${
                  dateRange?.start === new Date(day.toString()).getTime() &&
                  'rounded-full bg-pink-600  text-[#FFFFFF]'
                }
                ${
                  (dateRange?.start as number) <
                    new Date(day.toString()).getTime() &&
                  (dateRange?.end as number) >
                    new Date(day.toString()).getTime() &&
                  ' bg-orange-300'
                }
       
                `}
                type="button"
                onClick={() => toggleDay(day)}
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
