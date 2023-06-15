const AboutUs: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-8 flex flex-col gap-y-10 xl:mx-0 xl:w-screen">
      <div className="mt-56">
        <div className="flex h-1/2 w-1/2">
          <div>
            <img src="./images/mix-logo-blk.png" alt="blk logo" />
          </div>
          <div>
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
