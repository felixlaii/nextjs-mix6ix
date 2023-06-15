const AboutUs: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-8 flex flex-col gap-y-10 xl:mx-0 xl:w-screen">
      <div className="mt-56">
        <div className="flex w-screen">
          <div>
            <img
              className="h-1/2 ml-10 opacity-75"
              src="./images/citytv.JPG"
              alt="blk logo"
            />
          </div>
          <div className="mr-10">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p>
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
