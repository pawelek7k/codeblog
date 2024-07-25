export const Hero = () => {
  return (
    <section className="bg-hero-bg bg-fixed bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="bg-secondaryBg backdrop-blur-md w-1/3 h-1/3 rounded-2xl">
        <div className="bg-background w-full">
          <div className="bg-red"></div>
          <div className="bg-yellow"></div>
          <div className="bg-green"></div>
        </div>
        <h1 className="text-5xl text-center">Programming blog</h1>
      </div>
    </section>
  );
};
