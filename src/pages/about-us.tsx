const AboutUs: React.FC = () => {
  return (
    <div className="flex w-[calc(10% - 10px)] mx-8 gap-y-10 xl:mx-0 xl:w-screen">
      <div className="mt-56">
        <div className="flex justify-between relative w-screen">
          <div>
            <div className="absolute rounded-full w-[5rem] h-[5rem] bg-zinc-500 -bottom-[-16rem] -left-[-17rem] opacity-40"></div>

            <img
              className="rounded-full w-[20rem] h-[20rem] ml-10 opacity-70"
              src="./images/sharon.JPG"
              alt="blk logo"
            />

            <div className="absolute rounded-full w-[10rem] h-[10rem] bg-zinc-500 -bottom-50 -top-[-15rem] -left-[-1rem] opacity-40"></div>
          </div>
          <div className="mr-10 w-1/3">
            <h1 className="text-md text-white font-primary font-bold">
              About Us
            </h1>
            <p className="text-white text-sm font-primary ">
              A team of passionate, energetic, and experienced hospitality
              professionals who specialize in creating the most memorable
              cocktail experience for our guests. Our vision is to offer a
              culture through craftsmanship, and a personalized and exclusive
              experience. From intimate gatherings to large celebration parties.
              We are a bartending company serving within the Greater Toronto
              Area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
