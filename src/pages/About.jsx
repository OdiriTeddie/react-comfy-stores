const About = () => {
  return (
    <>
      <div className="flex fex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        repudiandae ipsum fuga laboriosam corrupti, saepe nihil nulla eaque
        rerum facilis sapiente placeat id ullam, fugiat aperiam ex
        reprehenderit, autem vitae in? Alias repellat illo minus fugit enim
        laboriosam aut nisi.
      </p>
    </>
  );
};

export default About;
