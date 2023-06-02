import { useMemo, useState } from 'react';

import CalendarDay from './components/CalendarDay';
import CalendarMonth from './components/CalendarMonth';

const CalendarLib = () => {
  const [choiceMonth, setChoiceMonth] = useState<number>(0);

  console.log('더빼', choiceMonth);
  // 현재 시간의 날짜 객체 생성
  const currentDate = new Date();

  const choiceDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + choiceMonth
    // currentDate.getDate()
  );

  // // 현재 달의 첫째 날을 구합니다.
  // const firstDayOfMonth = new Date(
  //   currentDate.getFullYear(),
  //   currentDate.getMonth(),
  //   1
  // );

  // 현재 달의 다음 달을 구합니다.
  const nextMonth =
    currentDate.getMonth() === 11
      ? 0
      : currentDate.getMonth() + 1 + choiceMonth;

  const nextMonthYear =
    currentDate.getMonth() === 11
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  // 현재 달의 다음 달의 첫째 날을 구합니다.
  const firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);

  // 현재 달의 전달의 마지막 날을 구합니다.
  const lastDayOfPreviousMonth = new Date(choiceDate.getTime() - 1);

  // 현재 달의 전달의 마지막 주의 일요일을 구합니다.
  const lastSundayOfPreviousMonth = new Date(lastDayOfPreviousMonth);
  lastSundayOfPreviousMonth.setDate(
    lastSundayOfPreviousMonth.getDate() - lastSundayOfPreviousMonth.getDay()
  );

  // 현재 달의 다음 달의 첫째 주의 토요일을 구합니다.
  const firstSaturdayOfNextMonth = new Date(firstDayOfNextMonth);
  firstSaturdayOfNextMonth.setDate(
    firstSaturdayOfNextMonth.getDate() +
      (12 - firstSaturdayOfNextMonth.getDay())
  );

  console.log('현재달', choiceDate);

  // 이전 달의 데이터 출력
  console.log('이전달 1', lastSundayOfPreviousMonth);

  // 마지막 달 데이터 출력
  console.log('다음달 2', firstSaturdayOfNextMonth);

  const [allDates, setAllDates] = useState<Object[]>([]);

  useMemo(() => {
    const standardDate = new Date(lastSundayOfPreviousMonth);
    const datesToAdd: [string, string][] = [];

    if (allDates.length !== 0) {
      console.log('체크1');
      setAllDates([]);
      // datesToAdd.length = 0;
    }

    while (standardDate <= firstSaturdayOfNextMonth) {
      datesToAdd.push([
        new Date(standardDate).getDay().toString(), // 요일을 구분하기 위함
        new Date(standardDate).getDate().toString(), // 각 월의 일(날짜)
      ]);

      standardDate.setDate(standardDate.getDate() + 1);
      console.log('datesToAdd', datesToAdd);
    }

    setAllDates((dates) => [...dates, ...datesToAdd]);
  }, [choiceMonth]);

  console.log('all', allDates);

  return (
    <div>
      <CalendarMonth
        choiceMonth={choiceMonth}
        setChoiceMonth={(newState: number | null) => {
          if (newState !== null) {
            setChoiceMonth(newState);
          }
        }}
      />
      <CalendarDay allDates={allDates} />
    </div>
  );
};

export default CalendarLib;
