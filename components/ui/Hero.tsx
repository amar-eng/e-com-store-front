'use client';

import { useRouter } from 'next/navigation';
import Button from './button';

interface HeroProps {
  data: any;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const backgroundImage = '/photos/herooo.png';
  console.log(data);
  const router = useRouter();

  const navigateToCategory = (id) => {
    router.push(`/category/${id}`);
  };
  return (
    <>
      <div
        className="relative aspect-square md:aspect-[2.3/1] flex items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
        }}
      >
        <div className="text-white mx-9 ">
          <h1 className=" sm:text-5xl md:text-7xl  font-light uppercase md:w-4/5">
            Leave A <br />
            <span className="text-orange-600">Scent</span>-Sational <br />
            Impression
          </h1>
          <p className="font-extralight sm:text-3xl md:text-3xl md:w-3/5 space-y-1 my-7">
            Explore our handpicked collection of designer colognes and let your
            scent tell your story.
          </p>
          <div className="flex items-center justify-between lg:w-2/5">
            {data &&
              data.map((cologne) => (
                <Button
                  className="bg-orange-600 font-extralight uppercase "
                  key={cologne.id}
                  onClick={() => navigateToCategory(cologne.id)}
                >
                  EXPLORE {cologne.name}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
