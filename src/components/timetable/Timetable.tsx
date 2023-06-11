import { useState } from 'react';

import CreateTime from './CreateTime';

interface TimeType {
  title: string;
  content: string;
  color: string;
}

const Timetable = () => {
  const [tableTitle, setTableTitle] = useState<string>('');
  const [tableContent, setTableContent] = useState<string>('');
  const [timeColor, setTimeColor] = useState<string>('');

  const registerTime: TimeType = {
    title: tableTitle,
    content: tableContent,
    color: timeColor,
  };

  const [timeList, setTimeList] = useState<TimeType[]>([]);

  const registerTable = (registeredData: TimeType) => {
    // console.log('data', registeredData);
    setTimeList((data) => [...data, registeredData]);
  };

  console.log('time', timeList);

  return (
    <div className="flex w-full justify-between">
      <div className="w-full">
        <div className="w-[18rem] border-4 py-5">
          <div className="w-auto py-4 text-center">
            <input
              type="text"
              onChange={(e) => setTableTitle(e.currentTarget.value)}
              alt="시간 주제"
              className="mx-auto w-[12rem] border-2"
            />
          </div>
          <div className="w-auto py-4 text-center">
            <textarea
              className="w-[12rem] border-2"
              onChange={(e) => setTableContent(e.currentTarget.value)}
            />
          </div>
          <div className="w-auto py-4 text-center">
            <select onChange={(e) => setTimeColor(e.currentTarget.value)}>
              <option value="">색상을 선택해주세요</option>
              <option value="bg-[#DB4455]">Red</option>
              <option value="bg-[#8fb0c6]">Blue</option>
              <option value="bg-[#3CB371]">Green</option>
              <option value="bg-[#E2E2E2]">Gray</option>
              <option value="bg-[e9ec69]">Yellow</option>
            </select>
          </div>
          <div className="w-auto py-2 text-center">
            <button
              type="button"
              onClick={() => registerTable(registerTime)}
              className="h-[2.5rem] w-[7rem] border-2 bg-amber-200 py-2 text-[0.9rem] font-bold text-[gray]"
            >
              생성
            </button>
          </div>
        </div>
        {timeList?.map((el: TimeType) => (
          <div key={1} className={`${el.color} my-5 w-[18rem] border-4 `}>
            <div className="w-auto py-4 text-center">{el.title}</div>
            <div className="w-auto py-4 text-center">{el.content}</div>
          </div>
        ))}
      </div>
      <CreateTime />
    </div>
  );
};

export default Timetable;
