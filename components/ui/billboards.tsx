import { Billboard } from '@/types';

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[1.6/0.5] overflow-hidden bg-cover bg-no-repeat "
      >
        <div className="h-full w-full flex flex-col justify-center items-start m-3 gap-y-8">
          <div
            className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs shadow-lg"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
