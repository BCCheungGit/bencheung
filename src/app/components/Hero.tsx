const Hero = () => {
  return (
    <section className="bg-background relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-start gap-5">
        <div className="flex flex-col justify-center items-start mt-5">
          <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[40px] text-[40px] lg:leading-[98px] md:mt-28 mt-0">
            Hello, I'm Ben.
          </h1>
          <p className="font-medium lg:text-[25px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            A computer science student at NYU Shanghai
          </p>
        </div>
        <div className="md:w-[500px] w-fit">
          <img className="rounded-xl" src="/profilepic.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
