import Hero from "@/components/Hero";
import ClientReviews from "@/components/ClientReviews";
const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <h1 className="font-primary text-center font-medium text-3xl xl:text-4xl mt-14 md:mt-24 tracking-widest text-zinc-400">
        Reviews
      </h1>
      <ClientReviews />
    </div>
  );
};

export default Home;
