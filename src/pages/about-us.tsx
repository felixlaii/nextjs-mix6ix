const AboutUs: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-8 mt-[40rem] flex flex-row gap-y-10 xl:mx-0 xl:w-screen relative z-10">
      <div className="xl:flex xl:flex-row md:mt-12 xl:-mt-40">
        <div className="mr-10 ml-10 flex flex-row">
          {/* <h1 className="text-md text-white font-primary tracking-widest">
            About Us
          </h1> */}

          <p className="text-zinc-500 text-lg tracking-widest font-primary w-1/2 border p-10">
            A team of passionate, energetic, and experienced hospitality
            professionals who specialize in creating the most memorable cocktail
            experience for our guests. Our vision is to offer a culture through
            craftsmanship, and a personalized and exclusive experience. From
            intimate gatherings to large celebration parties. We are a
            bartending company serving within the Greater Toronto Area.
          </p>

          <img
            className="border w-1/2"
            src="https://res.cloudinary.com/dyjj9jfc2/image/upload/v1687909604/about-us_zkerh3.jpg"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
