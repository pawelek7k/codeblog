export const Hero = () => {
  return (
    <section className="bg-hero-bg bg-fixed bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="bg-secondaryBg backdrop-blur-md w-[35rem] h-1/3 rounded-2xl shadow-lg shadow-indigo-500/40">
        <ul className="bg-background w-full list-none flex  m-0 rounded-t-2xl p-2 gap-2">
          <li className="bg-primary w-3 h-3 rounded-full"></li>
          <li className="bg-secondary w-3 h-3 rounded-full"></li>
          <li className="bg-accent w-3 h-3 rounded-full"></li>
        </ul>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-center mt-24 md:text-4xl">
            Programming blog
          </h1>
          <button>See more</button>
        </div>
      </div>
    </section>
  );
};
