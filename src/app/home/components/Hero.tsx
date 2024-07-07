import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-secondary mt-10 mb-12">
      <div className="flex px-20">
        <div className="flex justify-center items-start flex-col">
          <header className=" font-bold text-6xl leading-tight pb-6">
            Step Into Comfort and Style
          </header>
          <p className="w-4/5">
            Discover our exclusive collection of trendy and comfortable shoes,
            crafted to elevate your every step. Shop now for the perfect fit and
            unmatched quality.
          </p>
        </div>
        <div>
          <Image
            className="w-full h-full"
            src={"/assets/images/sport.png"}
            alt="hero image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
