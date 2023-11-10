import Button from './button';

const Hero = async () => {
  const backgroundImage = '/photos/hero.jpg';
  return (
    <>
      <div
        className="border relative aspect-square md:aspect-[2.4/1] flex items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
        }}
      >
        <div className="text-white mx-9 ">
          <h1 className=" sm:text-5xl md:text-7xl  font-light uppercase w-4/5">
            Leave A <br />
            <span className="text-yellow-600">Scent</span>-Sational Impression
          </h1>
          <p className="font-light sm:text-3xl md:text-3xl w-3/5 space-y-1 my-7">
            Explore our handpicked collection of designer colognes and let your
            scent tell your story.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
