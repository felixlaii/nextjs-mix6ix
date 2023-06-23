const Hero: React.FC = () => {
  return (
    <div>
      <img
        src="/images/hero-image.jpeg"
        className="img-blur w-full xl:h-[60rem] z-0  object-fill"
        alt="Hero Image"
      />
      <div className="absolute bg-brand-base/1 z-10 brightness-125"></div>
    </div>
  );
};

export default Hero;
