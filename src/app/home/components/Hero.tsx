import Container from "@/app/components/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-gray_bg md:bg-transparent">
      <Container>
        <section className=" md:bg-secondary pt-10 md:pt-0 md:mt-10 mb-12">
          <div className="flex flex-col md:flex-row px-5 md:px-20">
            <div className="flex justify-center items-center md:items-start flex-col">
              <header className=" font-bold text-5xl md:text-6xl leading-tight md:px-4 text-center pb-6">
                Step Into <span className=" text-primary">Comfort</span> and
                <span className=" text-primary"> Style</span>
              </header>
              <p className=" md:w-4/5 text-center">
                Discover our exclusive collection of trendy and comfortable
                shoes, crafted to elevate your every step. Shop now for the
                perfect fit and unmatched quality.
              </p>
            </div>
            <div className="m-auto">
              <Image
                className=" w-80 h-80  md:w-full md:h-full"
                src={"/assets/images/sport.png"}
                alt="hero image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
