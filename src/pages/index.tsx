import Hero from "@/components/Hero";
import ClientReviews from "@/components/ClientReviews";
import ScrollAnimation from "@/components/ScrollAnimation";
const Home: React.FC = () => {
  return (
    <div className="relative">
      <Hero />

      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-primary text-center font-medium text-3xl xl:text-4xl mt-14 md:mt-24 tracking-widest text-zinc-400">
          Reviews
        </h1>
        <ClientReviews />
      </div>
    </div>
  );
};

export default Home;
