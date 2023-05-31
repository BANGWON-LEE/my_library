import { useEffect, useState } from 'react';

interface CalendarDayType {
  allDates: object[];
}

const CalendarDay = (props: CalendarDayType) => {
  const [arrDayState, setArrDayState] = useState<object[]>();
  const toggleDay = (): void => {
    // console.log('이전123', dates);
  };

  useEffect(() => {
    setArrDayState(props.allDates);
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
