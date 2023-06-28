const AboutUs: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-8 mt-[20rem] flex flex-col gap-y-10 xl:mx-0 xl:w-screen relative z-10">
      <div className="xl:flex xl:flex-row md:mt-[1rem] xl:-mt-[1rem]">
        <div className="mr-10 ml-10 flex flex-row">
          <p className="relative text-zinc-500 text-lg tracking-widest font-primary w-1/2 p-10">
            A team of passionate, energetic, and experienced hospitality
            professionals who specialize in creating the most memorable cocktail
            experience for our guests. Our vision is to offer a culture through
            craftsmanship, and a personalized and exclusive experience. From
            intimate gatherings to large celebration parties. We are a
            bartending company serving within the Greater Toronto Area.
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute box-right w-full h-full bg-zinc-100 opacity-10"></span>
            </span>
          </p>
          <img
            className="w-1/2 opacity-80"
            src="https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687909604/about-us_zkerh3.jpg"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
