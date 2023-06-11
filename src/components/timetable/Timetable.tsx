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

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event: any) => {
    setIsDragging(true);
    // 드래그하는 요소의 데이터 설정
    const test = event.dataTransfer.setData('text/plain', event.target.id);
    console.log('test', test);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex w-full justify-between">
      <div className="w-1/5">
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
              <option value="bg-[#e9ec69]">Yellow</option>
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
        {timeList?.map((el: TimeType, index: number) => (
          <div
            key={1}
            id={index.toString()}
            className={`${el.color}  h-[7rem] w-[9.5rem] border-4 `}
            draggable
            onDragStart={(event: any) => handleDragStart(event)}
            onDragEnd={handleDragEnd}
          >
            <div className="my-4 w-auto text-center font-extrabold">
              {el.title}
            </div>
            <div className="my-4 w-auto text-center font-extralight">
              {el.content}
            </div>
          </div>
        ))}
      </div>
      <CreateTime isDragging={isDragging} />
    </div>
  );
};

export default Timetable;
