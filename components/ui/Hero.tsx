'use client';

import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeroProps {
  data: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const backgroundImage = '/photos/herooo1.jpeg';
  console.log(data);
  const router = useRouter();

  const navigateToCategory = (id: string) => {
    router.push(`/category/${id}`);
  };

  return (
    <>
      <div
        className="relative aspect-square pt-9 md:aspect-[2.6/1] flex md:items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'white',
        }}
      >
        <div className="text-darkBlack  ">
          <h1 className="text-3xl md:text-7xl font-light uppercase ml-16 md:ml-9">
            Leave A
            <br className="hidden md:block" />
            <span className="text-goldenHour"> Scent</span>-Sational
            <br className="hidden md:block" />
            Impression
          </h1>

          <p className="font-extralight text-base md:text-2xl ml-auto md:ml-9  mr-2 w-3/5  space-y-1 my-7">
            Explore our handpicked collection of designer colognes and let your
            scent tell your story.
          </p>
          <div className="flex items-center justify-between lg:w-2/4 mx-2 my-12 md:ml-9">
            {data &&
              data.map((cologne: any) => (
                <button
                  className="bg-goldenHour font-extralight w-auto rounded-full py-2 px-5 text-xs md:text-base  disabled:cursor-not-allowed disabled:opacity-50  hover:opacity-75 hover:text-black transition"
                  key={cologne.id}
                  onClick={() => navigateToCategory(cologne.id)}
                >
                  Shop {cologne.name}
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
