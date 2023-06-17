import React, { useState } from 'react';

interface CreateTimeType {
  isDragging: boolean;
}

const CreateTime = (props: CreateTimeType) => {
  const [timeArray, setTimeArray] = useState<object[][]>(() => {
    const initialArray: object[][] = [];

    // timeArray 배열 초기화
    for (let i = 0; i < 10; i += 1) {
      const innerArray: object[] = [];

      for (let j = 0; j < 6; j += 1) {
        innerArray.push({ title: '', content: '' });
      }

      initialArray.push(innerArray);
    }

    return initialArray;
  });

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };
  // const timeTableArray: object[][] = [];
  // const timeArray: object[][] = [];

  const handleDrop = (
    event: any,
    time: string,
    firstIndex: number,
    secondIndex: number
  ) => {
    event.preventDefault();

    if (time !== '') {
      return;
    }

    // 드롭된 요소 처리 로직
    const data = event.dataTransfer.getData('text/plain');
    const droppedElement = document.getElementById(data);
    const title = droppedElement?.childNodes[0]?.textContent;
    const content = droppedElement?.childNodes[1]?.textContent;
    event.target.appendChild(droppedElement);

    if (title !== '' && content !== '') {
      const plan: object = { title, content };
      const updatedArray = [...timeArray];
      updatedArray[firstIndex]![secondIndex] = plan;
      setTimeArray(updatedArray);
    }
  };
  console.log('결과', timeArray);

  const week: string[] = [' ', '월', '화', '수', '목', '금'];
  const row: string[][] = [
    ['09:00', '', '', '', '', ''],
    ['10:00', '', '', '', '', ''],
    ['11:00', '', '', '', '', ''],
    ['12:00', '', '', '', '', ''],
    ['13:00', '', '', '', '', ''],
    ['14:00', '', '', '', '', ''],
    ['15:00', '', '', '', '', ''],
    ['16:00', '', '', '', '', ''],
    ['17:00', '', '', '', '', ''],
    ['18:00', '', '', '', '', ''],
  ];

  return (
    <div className="w-[57rem] border-4">
      <div className="flex">
        {week.map((day) => (
          <div key={day} className="h-[4rem] w-[9.5rem] text-center">
            {day}
          </div>
        ))}
      </div>
      {row.map((ls: string[], index: number) => (
        <div className="flex" key={`ls ${Number(index)}`}>
          {ls.map((time, innerIndex: number) => (
            <div
              key={`innerIndex${Number(innerIndex)}`}
              id={`dropTarget ${index.toString()}${innerIndex.toString()}`}
              className="h-[7rem] w-[9.5rem]"
              onDragOver={(event) => handleDragOver(event)}
              onDrop={(event) => handleDrop(event, time, index, innerIndex - 1)}
              style={{
                border: props.isDragging
                  ? '2px dashed red'
                  : '0.5px solid black',
              }}
            >
              {time}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CreateTime;
