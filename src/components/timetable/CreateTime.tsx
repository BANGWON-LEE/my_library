import React from 'react';

interface CreateTimeType {
  isDragging: boolean;
}

const CreateTime = (props: CreateTimeType) => {
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    // 드롭된 요소 처리 로직
    const data = event.dataTransfer.getData('text/plain');
    const droppedElement = document.getElementById(data);
    console.log('handleDropData', droppedElement);
    event.target.appendChild(droppedElement);
  };

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
        <div className="flex" key={ls[0]}>
          {ls.map((time) => (
            <div
              key={time}
              id={`dropTarget ${index.toString()}`}
              className="h-[7rem] w-[9.5rem]"
              onDragOver={(event) => handleDragOver(event)}
              onDrop={(event) => handleDrop(event)}
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
