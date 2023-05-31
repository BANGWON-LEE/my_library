interface CalendarType {
  choiceMonth: number;
  setChoiceMonth: (newState: number) => void;
}

const CalendarMonth = (props: CalendarType) => {
  const prevMonth = (): void => {
    console.log('prev');
    props.setChoiceMonth(props.choiceMonth - 1);
  };

  const nextMonth = (): void => {
    console.log('다음');
    props.setChoiceMonth(props.choiceMonth + 1);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => prevMonth()}>
          이전
        </button>
      </div>
      <div>현재 월</div>
      <div>
        <button type="button" onClick={() => nextMonth()}>
          다음
        </button>
      </div>
    </div>
  );
};

export default CalendarMonth;
