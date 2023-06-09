import Calendar from '@/components/calendar/Calendar';
import Slide from '@/components/slider/Slider';

const Index = () => {
  return (
    <div>
      <div className="py-6">
        <div>slider</div>
        <div className="mx-auto h-full w-full bg-primary-bg">
          <Slide />
        </div>
      </div>
      <div className="py-6">
        <div>calendar</div>
        <div className="mx-auto h-full w-full bg-[#FFFFFF]">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Index;
