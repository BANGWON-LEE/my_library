import { useMemo, useState } from 'react';

import CalendarDay from './components/CalendarDay';
import CalendarMonth from './components/CalendarMonth';

const CalendarLib = () => {
  const [choiceMonth, setChoiceMonth] = useState<number>(0);

  console.log('더빼', choiceMonth);
  // 현재 시간의 날짜 객체 생성
  const currentDate = new Date();

  const choiceDate = new Date(
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + choiceMonth
      // currentDate.getDate()
    )
  );

  // 현재 월의 이전 달의 첫 번째 날짜 객체 생성
  const previousMonthFirstDate = new Date(
    choiceDate.getFullYear(),
    choiceDate.getMonth() - 1,
    1
  );

  // 현재 월의 다음 달의 마지막 날짜 객체 생성
  const nextMonthLastDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + (2 + choiceMonth),
    0
  );

  console.log('현재달', choiceDate);

  // 이전 달의 데이터 출력
  console.log('이전달 1', previousMonthFirstDate);

  // 마지막 달 데이터 출력
  console.log('다음달 2', nextMonthLastDate);

  const [allDates, setAllDates] = useState<Object[]>([]);

  useMemo(() => {
    if (allDates.length !== 0) {
      console.log('체크1');
      setAllDates([]);
    }

    const standardDate = new Date(previousMonthFirstDate);
    const datesToAdd: [string, string][] = [];

    while (standardDate <= nextMonthLastDate) {
      datesToAdd.push([
        new Date(standardDate).getDay().toString(), // 요일을 구분하기 위함
        new Date(standardDate).getDate().toString(), // 각 월의 일(날짜)
      ]);

      standardDate.setDate(standardDate.getDate() + 1);
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
