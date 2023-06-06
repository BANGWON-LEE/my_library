import Image from 'next/dist/client/image';

import LeftImg from '../../../asset/calendar_left.png';
import RightImg from '../../../asset/calendar_right.png';

interface CalendarType {
  choiceMonth: number;
  currentMonth: string;
  setChoiceMonth: (newState: number) => void;
}

const CalendarMonth = (props: CalendarType) => {
  const prevMonth = (): void => {
    props.setChoiceMonth(props.choiceMonth - 1);
  };

  const nextMonth = (): void => {
    props.setChoiceMonth(props.choiceMonth + 1);
  };

  return (
    <div className="mx-auto flex w-fit">
      <div className="pr-4">
        <button type="button" onClick={() => prevMonth()}>
          <Image
            className="h-[1.8rem] w-[2rem]"
            src={LeftImg}
            alt="달력 라이브러리 이미지"
          />
        </button>
      </div>
      <div>{props.currentMonth}월</div>
      <div className="pl-4">
        <button type="button" onClick={() => nextMonth()}>
          <Image
            className="h-[1.8rem] w-[2rem]"
            src={RightImg}
            alt="달력 라이브러리 이미지"
          />
        </button>
      </div>
    </div>
  );
};

export default CalendarMonth;
