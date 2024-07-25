export const Hero = () => {
  return (
    <section className="bg-hero-bg bg-fixed bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="bg-secondaryBg backdrop-blur-md w-[35rem] h-1/3 rounded-2xl">
        <ul className="bg-background w-full list-none flex  m-0 rounded-t-2xl p-2 gap-2">
          <li className="bg-primary w-4 h-4 rounded-full"></li>
          <li className="bg-secondary w-4 h-4 rounded-full"></li>
          <li className="bg-accent w-4 h-4 rounded-full"></li>
        </ul>
        <h1 className="text-2xl text-center mt-24 md:text-4xl">
          Programming blog
        </h1>
      </div>
    </section>
  );
};
